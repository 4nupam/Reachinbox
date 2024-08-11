import React from "react";
import { FaGooglePlus } from "react-icons/fa";
import Logo from "../assests/Logo.svg";

const Login = () => {
  const handleSignin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http:/Navigation";
  };

  return (
    <div className="bg-gray-900 h-screen text-white flex flex-col items-center justify-between">
      <nav className="flex items-center justify-center w-full p-2">
        <img src={Logo} alt="Logo" className="h-16 mr-2 mt-2" />
        <span className="font-extrabold text-2xl">REACHINBOX</span>
      </nav>
      <div className="bg-gray-800 px-8 py-16 rounded-lg text-center shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 ">Create a new Account</h2>
        <button
          onClick={handleSignin}
          className="bg-transparent border-2 flex items-center justify-center gap-2 rounded-lg text-white border-white font-thin py-2 px-4 mb-2 w-full"
        >
          <FaGooglePlus className="text-red-400 text-xl" /> Signup with Google
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded mb-4 w-full">
          Create An Account
        </button>
        <span className="text-sm">
          Already have an account?
          <a href="#" className="text-blue-400 hover:underline">
            Sign In
          </a>
        </span>
      </div>
      <footer className="w-full bg-slate-800 p-2 text-center mt-4">
        © 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
