import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [subNote,setSubNote]=useState([]);
  function handelClick(note){
  setSubNote(preNotes =>{
    return [...preNotes,
    note
    ];
  })
  }
  function deleteNote(id){
setSubNote(prevValue =>{
  return (
    prevValue.filter((subNote,index)=>{
      return index !== id ;
    })
  )
})
}
  
  return (
    <div>
      <Header />
      <CreateArea 
        addNotes={handelClick}
      />
     { subNote.map((newNotes,index)=>{
        return <Note key={index} id={index}  title={newNotes.title} content={newNotes.content} onClicked={deleteNote}/>
      })
     }
      <Footer />
    </div>
  );
}

export default App;
