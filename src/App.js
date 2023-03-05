import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <>
    <Router>
      <NoteState>
    <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        <Route exact path = "/login" element = {<Login/>}></Route>
        <Route exact path = "/signup" element = {<Signup/>}></Route>
      </Routes>
      </NoteState>
    </Router>
      
    </>
  );
}

export default App;
