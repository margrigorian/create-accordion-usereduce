import React, { useState, useReducer } from 'react';
import style from "./Notes.module.css";
import Note from '../note/Note';

export default function Accordion() {
    const [inputText, setInputText] = useState("");
    const [textArea, setTextArea] = useState("");
    const [notes, dispatch] = useReducer(reducer, []);

    function reducer(state, action) {
        switch(action.type) {
            case "add" : 
                return [...state, {status: false, theme: inputText, text: textArea}];
            case "change status" :
                return state.map((item, i) => i === action.index ? {status: item.status ? false : true, theme: item.theme, text: item.text} : item);
            default:
                return state.filter((item, i) => i !== action.index);
        }
    }

    return (
        <div className={style.container}>
            {/* ОБЯЗАТЕЛЬНО ЛИ В INPUT/TEXTAREA ПРОПИСЫВАТЬ VALUE? */}
            <p className={style.inputHead}>Theme</p>
            <input className={style.input} value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <p className={style.inputHead}>Description</p>
            <textarea className={style.textArea} value={textArea} rows="4" onChange={(e) => setTextArea(e.target.value)}></textarea>
            <div>
                <button className={style.buttonSubmit} onClick={() => dispatch({type: "add"})}>Submit</button>
            </div>
            {notes.length > 0 && 
                <div className={style.notesArea}>{notes.map((item, i) => <Note key={`NoteId-${i}`} note={item} index={i} dispatch={dispatch} />)}</div>}
        </div>
    )
}
