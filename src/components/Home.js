import AddNote from './AddNote'
import Notes from './Notes'

export default function Home() {

  return (
    <div className = "container my-3">
      <AddNote/>
  <h2 className='text-center'>Your Notes</h2>
  <Notes/>
    </div>
  )
}
