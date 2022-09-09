import React from 'react';
import style from "./Note.module.css";

export default function Note({note, index, dispatch}) {
  return (
    <div className={style.noteContainer}>
      <div className={style.noteTheme}>
        <p className={style.noteHeadText}>{note.theme}</p>
        <div className={style.buttonsContainer}>
          <div className={style.buttonMore} onClick={() => dispatch({type: "change status", index})}>{note.status ? "less" : "more"}</div>
          <div className={style.buttonDelete} onClick={() => dispatch({type: "delete note", index})}>delete</div>
        </div>
      </div>
      {note.status && <p className={style.noteDescription}>{note.text}</p>}
    </div>
  )
}
