import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PharmacistSignUp from "./pages/PharmacistSignUp";
import CourierSignUp from "./pages/CourierSignUp";
import UserSignUp from "./pages/UserSignUp";
import PharmacistLogin from "./pages/PharmacistLogin";
import CourierLogin from "./pages/CourierLogin";
import UserLogin from "./pages/UserLogin";
import MedicalDelivery from "./pages/MedicalDelivery";
import PortalUpload from "./pages/PortalUpload";

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
      <Route path="/medicaldelivery" element={<MedicalDelivery />} />
      <Route path="/portalupload" element={<PortalUpload />} />
    </Routes>
  );
}

export default App;
