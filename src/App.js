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
import Alert from './components/Alert';
import React from 'react';
function App() {
  const [alert,setAlert] = React.useState(null);
  const showAlert = (msg,type)=>{
      setAlert({
        msg : msg,
        type : type
      });
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  return (
    <>
    <Router>
      <NoteState showAlert = {showAlert}>
    <Navbar/>
    <Alert alert = {alert} />
      <Routes>
        <Route exact path = "/" element = {<Home showAlert = {showAlert}/>}></Route>
        <Route exact path = "/login" element = {<Login showAlert = {showAlert}/>}></Route>
        <Route exact path = "/signup" element = {<Signup showAlert = {showAlert}/>}></Route>
      </Routes>
      </NoteState>
    </Router>
      
    </>
  );
}

export default App;
