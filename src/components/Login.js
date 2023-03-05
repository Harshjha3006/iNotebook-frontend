import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [creds,setCreds] = React.useState({email : "",password : ""});
    const handleChange = (event)=>{
           setCreds({...creds,[event.target.name] : event.target.value});
    }
    const navigate = useNavigate();
    const handleSubmit = async ()=>{
          const response = await fetch('http://localhost:5000/auth/login',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email : creds.email,password : creds.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate("/");
          }
          else{
            alert('Invalid Credentials');
          }
    }
  return (
    <div className='container my-4'>
     <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" >Email address</label>
    <input onChange = {handleChange} type="email"  name = "email" className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange = {handleChange} type="password" name = "password" className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
</form> 
    </div>
  )
}

export default Login
