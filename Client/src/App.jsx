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
import MedicationSearch from "./pages/MedicationSearch";
import About from "./pages/About";
import Details from "./pages/Details";
import SearchPage from "./pages/SearchPage";
import PharmacistDashboard from "./pages/PharmacistDashboard";
import UserDashboard from "./pages/UserDashboard";
import CourierDashboard from "./pages/CourierDashboard";

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
      <Route path="/medicationsearch" element={<MedicationSearch />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/dashboard/pharmacist" element={<PharmacistDashboard />} />
      <Route path="/dashboard/user" element={<UserDashboard />} />
      <Route path="/dashboard/courier" element={<CourierDashboard />} />
    </Routes>
  );
}

export default App;
