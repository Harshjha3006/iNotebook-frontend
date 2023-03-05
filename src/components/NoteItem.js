import React,{useContext} from "react";
import NoteContext from "../context/NoteContext";
const NoteItem = (props) => {
    const {deleteNote,ref} = useContext(NoteContext);
  const { note,updateNote } = props;
  return (
    <>
      <div className="card col-md-3 mx-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">#{note.tag}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick = {()=>{deleteNote(note._id)}}></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick = {()=>{updateNote(note)}}></i>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
