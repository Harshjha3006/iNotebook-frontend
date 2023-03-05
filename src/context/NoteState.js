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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGFyc2gzMGpoYUBnbWFpbC5jb20ifSwiaWF0IjoxNjc2MzUzMTU0fQ.TfkptkICF35Lpd3wlRBiG8VwcknlY8QJ0uUX8l_-UXA",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGFyc2gzMGpoYUBnbWFpbC5jb20ifSwiaWF0IjoxNjc2MzUzMTU0fQ.TfkptkICF35Lpd3wlRBiG8VwcknlY8QJ0uUX8l_-UXA",
        },
        body : JSON.stringify({title,description,tag})
      });
      const json = await response.json();
      getNotes();
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/notes/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGFyc2gzMGpoYUBnbWFpbC5jb20ifSwiaWF0IjoxNjc2MzUzMTU0fQ.TfkptkICF35Lpd3wlRBiG8VwcknlY8QJ0uUX8l_-UXA",
        }
      });
    getNotes();
  };
  const editNote = async (title,description,tag,id) =>{
    console.log({title,description,tag,id});
    const response = await fetch(`${host}/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json",
        "Authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGFyc2gzMGpoYUBnbWFpbC5jb20ifSwiaWF0IjoxNjc2MzUzMTU0fQ.TfkptkICF35Lpd3wlRBiG8VwcknlY8QJ0uUX8l_-UXA",
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
