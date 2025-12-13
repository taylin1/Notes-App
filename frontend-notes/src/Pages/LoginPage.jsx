import React from "react";
import { useState } from "react";
import { loginUser } from "../services/authService";

function LoginPage() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);
      console.log("Logged in user:", data);

     
      // store user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">

        <h1 className="text-white mb-4 font-bold text-xl">
            Noti Application
        </h1>

        <form className="bg-gray-800 w-100 rounded-lg p-6 flex flex-col justify-center  ">
          <h1 className="text-2xl text-white font-bold text-center mb-4">Login:</h1>
          
          <div className=" space-x-8 mb-4">
          <label className="text-white ">Email:</label>
          <input
            type="email"
            placeholder="Please enter email"
            className="input bg-gray-200 rounded-xl py-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          </div>

          <div className=" space-x-5">
          <label className="text-white">Password:</label>
          <input
            type="password"
            placeholder="Please enter password"
            className="input bg-gray-200 rounded-xl py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
          </div>

          <div>
            <button className="bg-indigo-400 rounded-xl p-2 mt-4 text-white cursor-pointer">Login</button>
          </div>
          <p className="mt-8 text-white">Dont have an account sign up now: </p>
          <div className="">
            <button className="bg-indigo-800 rounded-xl text-white p-2 space-x-4 cursor-pointer">Sign up</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
