import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialAuth from "../Shared/SocialAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location, "from login");
  const from = location?.state || "/";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(from);
      })
      .catch((error) => {
        toast.error("Firebase error for login");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg  shrink-0 shadow-2xl">
          <div className="text-center lg:text-center m-8">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-wrap">
              If You Are New Here As An User Then Registration First. If You
              Have Created An Account Then You Can Login Here Now
            </p>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label font-bold text-blue-600">
                <Link to="/register">Create An Account! If You Don't Have</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">Or</div>
          </form>
          <button className="btn btn-accent">
            <SocialAuth></SocialAuth>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
