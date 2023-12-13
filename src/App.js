/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./CSS/style.css";
import ForgetPassword from "./forms/ForgetPassword";

import Login from "./forms/Login";
import NeedHelp from "./forms/NeedHelp";
import Regestration from "./forms/Regestration";
import Verify from "./forms/Verify";


import Transaction from './pages/Transaction/Transaction'
import SingleBanner from "./pages/Banner/SingleBanner";
import AboutUs from "./pages/AboutUs/AboutUs";
import Banner from "./pages/Banner/Banner";
import Chat from "./pages/Chat/Chat";
import ChatMenu from "./pages/Chat/ChatMenu";
import UserData from "./pages/User/UserData";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics/Analytics";
import Resources from "./pages/Documentation & Resources/Resources";
import Security from "./pages/Security & Compliance/Security";
import Financial from "./pages/Financial Overview/Financial";
import AccessControl from "./pages/Security & Compliance/AccessControl";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regestration />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/need_help" element={<NeedHelp />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/transaction" element={<Transaction />} /> 
        <Route path ='/Product'element={<Analytics/>}/>
        <Route path ='/service'element={<Resources/>}/>
        <Route path="/gallery" element={<Security/>} />
        <Route path="/getblog" element={<Financial/>} />
        <Route path="//role-basedaccesscontrol" element={<AccessControl/>} />
      </Routes> 
    </>
  );
}

export default App;
