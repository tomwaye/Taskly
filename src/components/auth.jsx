import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // <-- State for error messages

  const handleSignup = async () => {
    setError(""); // Clear previous errors
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      console.error("Signup error:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Failed to sign up. Please try again.");
      }
    }
  };

  const handleLogin = async () => {
    setError(""); // Clear previous errors
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else {
        setError("Failed to login. Please try again.");
      }
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome to Taskly</h2>

        {error && (
          <div className="text-red-600 font-medium text-center bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSignup}
            className="flex-1 bg-green-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
