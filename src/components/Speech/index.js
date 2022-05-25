import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Dialog, Box, IconButton } from '@mui/material';
import useListItems from '../../hooks/listItems';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/items';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

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
    return <span>Este navegador não suporta esta funcionalidade.</span>;
  }

  const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

  const startListening = () => {
    setError('');
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = async () => {
    SpeechRecognition.stopListening();

    if (transcript === '' || transcript.length > 30) {
      setError('Fale novamente...');
      return;
    }

    const found = items.find((i) => i.name === capitalize(transcript)) ?? {};

    const payload = {
      list_id: listId,
      name: found.name ?? transcript,
      category: found.category ?? 'diversos',
    };

    if (itemAlreadyExists(payload.name)) {
      setError('Este item já existe');
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
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>{error && !listening ? error : transcript}</Box>
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>
            <IconButton
              size="large"
              color="primary"
              sx={{ background: '#E2E0FB' }}
              onTouchStart={startListening}
              onMouseDown={startListening}
              onTouchEnd={stopListening}
              onMouseUp={stopListening}
            >
              <KeyboardVoiceIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flex: '1', alignItems: 'center' }}>
            <h3>Segure para falar</h3>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
