import { useState } from 'react';
import Dice from "./Dice.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Dice numDice={6} maxVal={6}/>
    </div>
  );
}

export default App;