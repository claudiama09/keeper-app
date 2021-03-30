import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(preNotes => {
      return newNote["id"] = uuidv4(),
      [...preNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes(preNotes => {
      return preNotes.filter((noteItem)=> {
        return noteItem.id !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map(noteItem => {
        return (<Note 
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />)
      })}
      <Footer />
    </div>
  );
}

export default App;