import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PharmacistSignUp from "./pages/PharmacistSignUp";
import CourierSignUp from "./pages/CourierSignUp";
import UserSignUp from "./pages/UserSignUp";
import PharmacistLogin from "./pages/PharmacistLogin";
import CourierLogin from "./pages/CourierLogin";
import UserLogin from "./pages/UserLogin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pharmacist/signup" element={<PharmacistSignUp />} />
      <Route path="/pharmacist/login" element={<PharmacistLogin />} />
      <Route path="/courier/signup" element={<CourierSignUp />} />
      <Route path="/courier/login" element={<CourierLogin />} />
      <Route path="/user/signup" element={<UserSignUp />} />
      <Route path="/user/login" element={<UserLogin />} />
    </Routes>
  );
}

export default App;
