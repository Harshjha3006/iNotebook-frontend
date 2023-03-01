import NoteContext from "../context/NoteContext"
import { useContext,useEffect } from "react"
import NoteItem from "./NoteItem";
const Notes = () => {
    const {notes,setNotes,getNotes} = useContext(NoteContext);
    useEffect(()=>{
        getNotes();
    },[]);
  return (
    <div className = "row my-3">
      {notes.map(element =>{
        return <NoteItem note = {element}/>
      })}
    </div>
  )
}

export default Notes
