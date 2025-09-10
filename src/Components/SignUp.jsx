import React, { useState } from "react";
import { auth } from "../firebase";  // 
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  // Step 1: states to hold form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: function to handle signup
  const handleSignup = async () => {
    try {
      
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created! You can now log in.");
    } catch (error) {
      alert("❌ You need an account to continue!"); 
    }
  };

  
  return (
    <div className="wrapper">
        <div className="sign-up">
            <h2>Sign Up</h2>
            <label htmlFor="Email">Email:</label>
            <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="Password">Password:</label>
            <input
                type="password"
                placeholder="Enter a password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Create Account</button>
        </div>
    </div>
  );
}

export default Signup;
