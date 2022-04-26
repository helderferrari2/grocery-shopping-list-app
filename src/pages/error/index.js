import React, { useState } from 'react';

import './styles.css';

export default function Error() {
  const [code, setCode] = useState('404');
  const [message, setMessage] = useState('Not found');

  return (
    <div className="container">
      <h1 className="title">{code}</h1>
      <h4 className="subtitle">{message}</h4>
      <a href="/">voltar</a>
    </div>
  );
}
