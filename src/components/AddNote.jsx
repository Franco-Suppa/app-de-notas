import React, { useState } from 'react'

function AddNote( { handleAddNote }) {
    const [noteText , setNoteText] = useState('')
    const charactherLimit = 200 
    const handleChange = (event) => {
        if(charactherLimit - event.target.value.length >=0) {
            setNoteText(event.target.value)
        }
        
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }
  return (
    <div className="note new">
      <textarea onChange={handleChange} value={noteText} rows="8" cols="10" placeholder="Escribir nueva nota"></textarea>
      <div className="note-footer">
          <small>{charactherLimit - noteText.length} caracteres disponibles</small>
          <button onClick={handleSaveClick} className='save'>Guardar</button>
      </div>
    </div>
  );
}

export default AddNote