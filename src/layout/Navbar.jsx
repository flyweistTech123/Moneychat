/** @format */
import { useState } from "react";
import logo from "../Images/output.png";
import ProfileModal from "../Component/Modals/ProfileModal/ProfileModal";
import profile from '../Images/profilmodal.png'
import signout from '../Images/signout.png'
import manageacc from '../Images/profilemodal3.png'
import setting from '../Images/profilemodel2.png'
import help from '../Images/profilemodal1.png'
import { Link, useNavigate } from "react-router-dom";
import { BsFilterLeft } from "react-icons/bs";
import searchicon from '../Images/searchicon.png'
import { IoIosArrowForward } from "react-icons/io";



const Navbar = ({ close, handleSideBar, handleBoss, setShow, show }) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };
  const newComp = () => {
    handleBoss()
  }

  return (
    <>
      <div className="Navbar">

        <div className="logo">
          <img style={{ cursor: "pointer" }} src={logo} alt="" onClick={() => setShow(!show)} />
        </div>

        <div className="search_bar">
          <i> <img src={searchicon} alt="" /> </i>
          <input type="search" placeholder="Search..." />
        </div>

        <div className="side_div">
          <div className="oo">
            <BsFilterLeft style={{ fontSize: '40px', fontWeight: '700', color: '#000000' }} onClick={() => setShow(!show)} />
          </div>
          <img src="./Image/13.png" alt="" className="notify" />

          <div className="content">

            <img src="./Image/12.png" alt="" style={{ width: '50px', height: '50px' }} />


            <div>
              <h6 className="head">Dave Smith</h6>
              <p onClick={openProfileModal} style={{ display: 'flex', alignItems: 'center' }}>
                VIEW MORE <IoIosArrowForward style={{ marginLeft: '5px' }} />
              </p>

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
              <div className="signout" onClick={() => navigate('/')}>
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
