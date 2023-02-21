import { Link } from "react-router-dom"
import React, { useContext } from "react"
import AuthContext  from "../../context/AuthContext"

export default function (props) {
  const loginUser  = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <>
              <Link to="/register">Sign Up</Link>
            </>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
            <p className="text-left mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
          <div className="d-grid gap-1 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}