import React,{useContext,useState} from 'react'
import NoteContext from '../context/NoteContext';
const AddNote = (props) => {
    const [note,setNote] = useState({title : "",description : "",tag : ""});
    const {addNote} = useContext(NoteContext);
    const handleChange = (event)=>{
          setNote({...note,[event.target.name] : event.target.value})
    }
    const handleSubmit = (e)=>{
        setNote({title : "",description : "",tag : ""})
        addNote(note.title,note.description,note.tag);
        props.showAlert("Note Added successfully","success");
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
              value = {note.title}
              type="text"
              className="form-control"
              id="title"
              name = "title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
              minLength={3}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="desc">Description</label>
            <input
            onChange = {handleChange}
            value = {note.description}
              type="text"
              className="form-control"
              id="description"
              name = "description"
              placeholder="Enter description"
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              onChange = {handleChange}
              value = {note.tag}
              className="form-control"
              id="Tag"
              name = "tag"
              aria-describedby="emailHelp"
              placeholder="Enter tag"
            />
          </div>
          <button disabled = {note.title.length < 3 || note.description.length < 5} onClick = {handleSubmit} type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
