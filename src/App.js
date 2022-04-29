import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'
import { nanoid } from 'nanoid'

function App() {
const [notes , setNotes] = useState([])

const [searchText , setSearchText] = useState([])

const [darkMode , setDarkMode] = useState(false)

useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notas'))
    if(savedNotes.length > 0) {
        setNotes(savedNotes)
    }
    const savedMode = JSON.parse(localStorage.getItem('darkMode'))
    if(savedMode){
        setDarkMode(savedMode)
    }
}, [])

useEffect(()=> {
    localStorage.setItem('notas' , JSON.stringify(notes))
}, [notes])

useEffect(()=> {
    localStorage.setItem('darkMode' , JSON.stringify(darkMode))
}, [darkMode])



const addNote = (text) => {
    const date = new Date()
    const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
    }

    const newNotes = [...notes , newNote]
    setNotes(newNotes)
}

const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id )
    setNotes(newNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList  notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
                    handleAddNote={addNote}
                     handleDeleteNote={deleteNote} />
        </div>
    </div>
  )
}

export default App