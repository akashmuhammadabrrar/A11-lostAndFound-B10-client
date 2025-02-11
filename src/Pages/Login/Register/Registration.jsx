import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import SocialAuth from "../../Shared/SocialAuth";
import { toast } from "react-toastify";

const Registration = () => {
  const { createUser, updateUserProfile, user, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // password validation
    const isValid = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
    if (!isValid) {
      toast.error(
        "Password Must be 6 character and a uppercase and a lowercase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            toast.success("Registration Successful");
          })
          .catch((error) => {
            // console.log(error.message);
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
    // console.log({ name, email, password, photo });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg  shrink-0 shadow-2xl">
          <div className="text-center lg:text-center m-8">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 text-wrap">
              If You Are New Here As An User Then Registration First. If You
              Have Created An Account Then You Can Login Here Now
            </p>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            {/* name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name here"
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
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
            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
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
              <label className="label">
                <Link to="/login">Have an Account! Login Now</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <div className="divider">Or</div>
              <button className="btn btn-accent">
                <SocialAuth></SocialAuth>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

/**
 *
 *
 * **/
