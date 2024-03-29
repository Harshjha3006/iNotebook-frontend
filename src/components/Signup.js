import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [creds, setCreds] = React.useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = creds;
    const response = await fetch('http://localhost:5000/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      props.showAlert("User Account Created successfully", "success");
      navigate("/");
    }
    else {
      props.showAlert("Invalid Input", "danger");
    }
  }
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">Create a New Account</h2>
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
          <span>   Already Have an Account <Link to="/login">Log In</Link></span>
        </form>
      </div>
    </>
  );
};

export default Signup;
