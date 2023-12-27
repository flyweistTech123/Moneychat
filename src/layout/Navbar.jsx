/** @format */
import { useState } from "react";
import logo from "../Images/logo.png";
import { IoSearch } from "react-icons/io5";
import ProfileModal from "../Component/Modals/ProfileModal/ProfileModal";
import profile from '../Images/profilmodal.png'
import signout from '../Images/signout.png'
import manageacc from '../Images/profilemodal3.png'
import setting from '../Images/profilemodel2.png'
import help from '../Images/profilemodal1.png'
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({close,handleSideBar,handleBoss}) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };
  const newComp=()=>{
    handleBoss()
  }
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="search_bar">
          <i><IoSearch /></i>
          <input type="search" placeholder="Search..." />
        </div>

        <div className="side_div">
          <img src="./Image/13.png" alt="" className="notify" />

          <div className="content">
            <img src="./Image/12.png" alt="" style={{width:'50px', height:'50px'}} />
            <div>
              <p className="head">Dave Smith</p>
              <a onClick={openProfileModal} >VIEW MORE </a>
            </div>
          </div>

        </div>


      </div>
      {/* Notification Modal */}
      {isProfileModalOpen && (
        <ProfileModal onClose={closeProfileModal} isProfileModalOpen={isProfileModalOpen}>
          <div className="profile-container1">
            <div className="profile-info1">
              <img src={profile} alt="User" className="user-image1" />
              <h2>Dave Smith</h2>
              <p><span>USER ID -</span> ABC2345</p>
              <div className="signout" onClick={()=>navigate('/')}>
                <img src={signout} alt="Sign Out" className="signout-icon" />
                <p >SIGN OUT</p>
              </div>
            </div>

            <div className="profileline"><hr /></div>

            <div className="profile-sections1">
            <Link to={'/accountdetails'} className="custom-link">
              <div className="profile-content">
                <img src={manageacc} alt="" />
                <h3>Manage Account</h3>
              </div>
              </Link>
              <Link to={'/setting'} className="custom-link">
              <div className="profile-content">
              <img src={setting} alt="" />
                <h3>Change Settings</h3>
              </div>
              </Link>
              <Link to={'/helpdesk'} className="custom-link">
              <div className="profile-content">
              <img src={help} alt="" />
                <h3>Support & Help</h3>
              </div>
              </Link>
            </div>
          </div>
        </ProfileModal>
      )}
    </>
  );
};

export default Navbar;
