import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch(`${host}/notes/fetchNote`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGFyc2gzMGpoYTJAZ21haWwuY29tIn0sImlhdCI6MTY3NjM1MjY5MX0.UsZPA-XT9z_kuhngekXw6HRMwts3sMFcoClRMpXUpGs",
      }
    });
    const json = await response.json();
    setNotes(json);
  };
  const addNote = (title, description, tag) => {
    console.log("Addding a Note");
    const note = {
      _id: "63eb1cfdc75409c6d77123189",
      user: "63eb1ca908544ee0d4a9daaf",
      title: title,
      description: description,
      tag: tag,
      timestamp: "2023-02-14T05:32:45.512Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
