import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/user/userSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate } from 'react-router-dom';

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/server/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      // Dispatch the user data directly from the response
      dispatch(signInSuccess(data.user));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
    >
      <FcGoogle className="w-5 h-5" />
      <span className="text-gray-600">Sign in with Google</span>
    </button>
  );
};

export default Oauth;
