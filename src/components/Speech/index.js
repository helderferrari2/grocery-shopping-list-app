import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Dialog, Box, IconButton } from '@mui/material';
import useListItems from '../../hooks/listItems';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/items';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import RecordingIcon from '../../assets/images/Ripple-1.8s-200px.svg';

export default function Speech() {
  const { listId } = useParams();
  const { items } = useItems();
  const { itemAlreadyExists, handleNewItem } = useListItems();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = async () => {
    SpeechRecognition.stopListening();

    if (transcript === '' || transcript.length > 30) {
      setError('Não entendi, Fale novamente.');
      return;
    }

    const found = items.find((i) => i.name === transcript) ?? {};

    const payload = {
      list_id: listId,
      name: found.name ?? transcript,
      category: found.category ?? 'diversos',
    };

    resetTranscript();
    if (itemAlreadyExists(payload.name)) {
      return;
    }

    await handleNewItem(payload);
  };

  return (
    <>
      <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={handleOpen}>
        <KeyboardVoiceIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            p: 4,
          }}
        >
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>
            <h3>Toque para falar</h3>
          </Box>
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>
            <IconButton onTouchStart={startListening} onMouseDown={startListening} onTouchEnd={stopListening} onMouseUp={stopListening}>
              {listening ? <img src={RecordingIcon} alt="Recording" style={{ maxWidth: '100px' }} /> : <KeyboardVoiceIcon sx={{ fontSize: 50 }} />}
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>{error && !listening ? error : transcript}</Box>
        </Box>
      </Dialog>
    </>
  );
}
