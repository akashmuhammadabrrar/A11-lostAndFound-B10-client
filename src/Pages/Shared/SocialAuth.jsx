import React, { useContext } from "react";
import google from "../../assets/icons8-google-48.png";
import AuthContext from "../../Context/AuthContext/AuthContext";

const SocialAuth = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
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
