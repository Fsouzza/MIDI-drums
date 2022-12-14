import React from 'react';
import 'normalize.css';
import { AudioMidi } from 'components/midi/midi';
import { KeyDrums } from 'data/KeyDrums';

export const App = () => {
  const clickKeyBoard = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.ELEMENT_NODE);
    
  }
  
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/key${e.currentTarget.value}.mp3`);
    audio.play();
  }

  return (
    <div className="App">
      <AudioMidi keyDrum={KeyDrums} clickKeyBoard={clickKeyBoard} clickHandler={clickHandler} />
    </div>
  );
}
