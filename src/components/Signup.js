import React from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [creds,setCreds] = React.useState({name : "",email : "",password : ""});
    const navigate = useNavigate();
    const handleChange = (event)=>{
        setCreds({...creds,[event.target.name] : event.target.value});
    }
    const handleSubmit = async ()=>{
          const {name,email,password} = creds;
          const response = await fetch('http://localhost:5000/auth/createUser',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name,email,password})
          })
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate("/");
          }
          else{
            alert("User Already exists");
          }
    }
  return (
    <>
      <div className="container my-4">
        <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              minLength={3}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              minLength={5}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
