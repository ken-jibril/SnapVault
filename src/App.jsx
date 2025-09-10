import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Routes>
      {/* Sign Up page at root */}
      <Route path="/" element={<SignUp />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
