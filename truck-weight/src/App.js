import React from 'react';
import './App.css';

import DeckSpace from './components/DeckSpace';
import NavBar from './components/NavBar';
import Weights from './components/Weights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Weights />
        <DeckSpace />
      </header>
    </div>
  );
}

export default App;
