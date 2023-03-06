import AddNote from './AddNote'
import Notes from './Notes'

export default function Home(props) {

  return (
    <div className = "container my-3">
      <AddNote showAlert = {props.showAlert}/>
  <h2 className='text-center'>Your Notes</h2>
  <Notes showAlert = {props.showAlert}/>
    </div>
  )
}
