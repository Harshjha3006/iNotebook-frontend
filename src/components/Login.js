import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = (props) => {
  const [creds, setCreds] = React.useState({ email: "", password: "" });
  const handleChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: creds.email, password: creds.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      props.showAlert("Logged In successfully", "success");
      navigate("/");
    }
    else {
      props.showAlert("Invalid Credentials", "danger");
    }
  }
  return (
    <div className='container my-4'>
      <h2 className='text-center'>Login into your Account</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" >Email address</label>
          <input required onChange={handleChange} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input minLength={5} required onChange={handleChange} type="password" name="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <span>   Don't have an account <Link to="/signup">Sign Up</Link></span>
      </form>
    </div>
  )
}

export default Login
