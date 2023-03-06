import NoteContext from "../context/NoteContext"
import { useContext,useEffect,useRef,useState } from "react"
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const navigate = useNavigate();
  const [note, setNote] = useState({ id : "",title: "", description: "", tag: "" });
  const { editNote ,ref} = useContext(NoteContext);
  const refClose = useRef(null);
  const updateNote = (currentNote)=>{
      ref.current.click();
      setNote({id : currentNote._id,title : currentNote.title,description : currentNote.description,tag : currentNote.tag});
  }
  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const handleUpdate = ()=>{
    refClose.current.click();
    editNote(note.title,note.description,note.tag,note.id);
    props.showAlert("Note Updated Successfully","success");
  }
    const {notes,getNotes} = useContext(NoteContext);
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        navigate('/login');
      }
      //eslint-disable-next-line
    },[]);
  return (
    <>
  <h2 className='text-center'>Your Notes</h2>
    <button
        type="button"
        ref = {ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                ref = {refClose}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="title">title</label>
                  <input
                    onChange={handleChange}
                    value = {note.title}
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    placeholder="Enter title"
                    minLength={3}
                    required
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="desc">Description</label>
                  <input
                    onChange={handleChange}
                    value = {note.description}
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value = {note.tag}
                    className="form-control"
                    id="Tag"
                    name="tag"
                    aria-describedby="emailHelp"
                    placeholder="Enter tag"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button disabled = {note.title.length < 3 || note.description.length < 5} type="button" className="btn btn-primary" onClick = {handleUpdate}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className = "row my-3">
      {notes.length >= 1?notes.map(element =>{
        return <NoteItem key = {element.title} note = {element} updateNote = {updateNote}/>
      }):
      <div className="container"><h6 className="text-center my-4">No Notes To Display</h6></div>
      }
    </div>
    </>
  )
}

export default Notes
