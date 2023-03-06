import NoteContext from "./NoteContext";
import { useState,useRef } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  const ref = useRef(null);
  const getNotes = async () => {
    const response = await fetch(`${host}/notes/fetchNote`, {
      method: "GET",
      headers: {
        "Authorization":
          localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    setNotes(json);   
  };
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/notes/addNote`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization":
            localStorage.getItem('token')
        },
        body : JSON.stringify({title,description,tag})
      });
      //eslint-disable-next-line
      const json = await response.json();
      getNotes();
  };
  const deleteNote = async (id) => {
    //eslint-disable-next-line
    const response = await fetch(`${host}/notes/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization":
            localStorage.getItem('token'),
        }
      });
      props.showAlert("Note deleted successfully","success");
    getNotes();
  };
  const editNote = async (title,description,tag,id) =>{
    console.log({title,description,tag,id});
    const response = await fetch(`${host}/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json",
        "Authorization":
          localStorage.getItem('token'),
      },
      body : JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json);
    getNotes();
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote,getNotes,editNote ,ref}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
