import React, { useContext } from "react";
import google from "../../assets/icons8-google-48.png";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const { signInWithGoogle, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        // console.log(result.user);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <img className="w-6" src={google} alt="" />
      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
};

export default SocialAuth;
