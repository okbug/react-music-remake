import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = '网易云音乐';
  });
  return (
    <div className="App">
      <h1>云音乐</h1>
    </div>
  );
}

export default App;
