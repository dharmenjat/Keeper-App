import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""

  });
 
  function handelText(event){
const {value,name}=event.target;
setNote(prevValue =>{
  return {
    ...prevValue,
    [name]:value
  };
})
  }
  function submitNote(event){
    props.addNotes(note);
    setNote(
      {
      title:"",
      content:""
      });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handelText} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handelText} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
