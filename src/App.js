import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/NoteState';
function App() {
  return (
    <>
    <Router>
      <NoteState>
    <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
      </Routes>
      </NoteState>
    </Router>
      
    </>
  );
}

export default App;
