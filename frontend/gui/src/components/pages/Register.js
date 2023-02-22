import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const { registerUser }  = useContext(AuthContext)

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(email, password, password2);
      };

    return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register</h3>
              <div className="text-center">
                Already registered?{" "}
                <>
                    <Link to="/login">Sign In</Link>
                </>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password" >Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="confirm-password" ></label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Confirm Password"
                  onChange={e => setPassword2(e.target.value)}
                  required
                />
                <p>{password2 !== password ? "Passwords do not match" : ""}</p>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
}


