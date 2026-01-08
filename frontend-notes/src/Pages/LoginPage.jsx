import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);

      // store logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));

      // navigation
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    //Noti Login Page 
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white mb-4 font-bold text-xl">
          Noti Application
        </h1>

        <form
          onSubmit={handleLogin}
          className="bg-gray-800 w-80 rounded-lg p-6 flex flex-col"
        >
          <h2 className="text-2xl text-white font-bold text-center mb-4">
            Login
          </h2>

          {error && (
            <p className="text-red-400 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <label className="text-white mb-1">Email</label>
          <input
            type="email"
            className="bg-gray-200 rounded-lg p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="text-white mb-1">Password</label>
          <input
            type="password"
            className="bg-gray-200 rounded-lg p-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 rounded-lg p-2 text-white font-semibold"
          >
            Login
          </button>

          <p className="mt-6 text-white text-sm text-center">
            Don’t have an account?
          </p>

          <Link
            to="/signup"
            className="mt-2 bg-indigo-800 rounded-lg text-white p-2 text-center"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
