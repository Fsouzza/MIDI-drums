import styles from './Midi.module.scss';
import React from 'react';
import { KeyDrum } from 'components/keydrum/keydrum';
import { GiDrum } from 'react-icons/gi';
import { DrumType } from 'data/KeyDrums';

type Props = {
  keyDrum: DrumType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickKeyBoard: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const AudioMidi: React.FC<Props> = ({keyDrum, clickHandler, clickKeyBoard}) =>{
  return(
    <div className={styles.midi}>
      <div className={styles.midi__titulo}>
        <h1>Alura <span>MIDI</span></h1>
        <div>
          <GiDrum size={40} />
        </div>
      </div>
      <div className={styles.midi__keys}>
        {keyDrum.map((element: DrumType) => (
          <KeyDrum key={element.note} note={element.note} nome={element.name} clickKeyBoard={clickKeyBoard} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}