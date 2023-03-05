import React,{useContext,useState} from 'react'
import NoteContext from '../context/NoteContext';
const AddNote = () => {
    const [note,setNote] = useState({title : "",description : "",tag : ""});
    const {addNote} = useContext(NoteContext);
    const handleChange = (event)=>{
          setNote({...note,[event.target.name] : event.target.value})
    }
    const handleSubmit = (e)=>{
        addNote(note.title,note.description,note.tag);
    }
  return (
    <div>
      <h2 className="text-center">Add a Note</h2>
      <div className="container my-3">
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">title</label>
            <input
              onChange = {handleChange}
              type="text"
              className="form-control"
              id="title"
              name = "title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="desc">Description</label>
            <input
            onChange = {handleChange}
              type="text"
              className="form-control"
              id="description"
              name = "description"
              placeholder="Enter description"
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              onChange = {handleChange}
              className="form-control"
              id="Tag"
              name = "tag"
              aria-describedby="emailHelp"
              placeholder="Enter tag"
            />
          </div>
          <button onClick = {handleSubmit} type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
