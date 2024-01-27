import { useState } from 'react'

import Note from "./Note"


const App = (props) => {
  const [notes,setNote]=useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNote(props.notes.concat(noteObject))
    setNewNote('')
  }
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  return (
      <div className='container'>
      <h1>Notes</h1>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
        <form onSubmit={addNote}>
          <input type="text"  value = {newNote}  onChange={handleNoteChange} placeholder='ADD a note here '/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
  
export default App