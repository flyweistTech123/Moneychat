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
import Flaggedtransactions from "./pages/Security & Compliance/flaggedtransactions";
import Compliancerecords from "./pages/Security & Compliance/Compliancerecords";
import RecipientSManagement from "./pages/Recipient’s Management/Recipient’sManagement";
import ReviewInterface from "./pages/Review Interface/ReviewInterface";
import CommunicationTools from "./pages/Communication Tools/CommunicationTools";
import Setting from "./pages/Setting/Setting";
import NotificationsAlerts from "./pages/Setting/NotificationsAlerts";
import ReportSettings from "./pages/Setting/ReportSettings";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import HelpDesk from "./pages/Support & Help Desk/HelpDesk";

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
        <Route path ='/analytics'element={<Analytics/>}/>
        <Route path ='/documentation&resources'element={<Resources/>}/>
        <Route path="/security&scompliance" element={<Security/>} />
        <Route path="/financial_overview" element={<Financial/>} />
        <Route path="/role-basedaccesscontrol" element={<AccessControl/>} />
        <Route path="/flaggedtransactions" element={<Flaggedtransactions/>} />
        <Route path="/flaggedtransactions" element={<Flaggedtransactions/>} />
        <Route path="/compliancerecords" element={<Compliancerecords/>} />
        <Route path="/recipient_management" element={<RecipientSManagement/>} />
        <Route path="/review_interface" element={<ReviewInterface/>} />
        <Route path="/communication_tools" element={<CommunicationTools/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/notification" element={<NotificationsAlerts/>} />
        <Route path="/reportSettings" element={<ReportSettings/>} />
        <Route path="/accountdetails" element={<AccountDetails/>} />
        <Route path="/helpdesk" element={<HelpDesk/>} />
      </Routes> 
    </>
  );
}

export default App;
