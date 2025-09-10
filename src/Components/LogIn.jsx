import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("🎉 Logged in successfully!");
    } catch (error) {
      alert("❌ Wrong Password"); 
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    alert("👋 You have been logged out.");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
