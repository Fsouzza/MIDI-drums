import React from 'react';
import styles from './Keydrum.module.scss';

type Props = {
  nome: string;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickKeyBoard: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const KeyDrum: React.FC<Props> = ({ nome, note, clickHandler, clickKeyBoard}) =>{
  return(
    <button onKeyDown={clickKeyBoard} onClick={clickHandler} value={note} className={styles.keyboard}>
      {nome}
    </button>
  );
}