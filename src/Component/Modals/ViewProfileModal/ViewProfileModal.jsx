import React, { useState } from 'react';
import './ViewProfileModal.css';
import closeicon from '../../../Images/closeicon.png'
import profile from '../../../Images/profilerepost.png'
import employee from '../../../Images/staf.png'
import call from '../../../Images/profilecall.png'
import email from '../../../Images/profileemail.png'
import loaction from '../../../Images/locationlogin.png'
import doc from '../../../Images/accdoc.png'
import { MdOutlineHistory } from "react-icons/md";
import info from '../../../Images/redinfomodal.png'
import block from '../../../Images/crossthree.png'
import dot from '../../../Images/dot.png'
import { Threeline6 } from '../../TransactionModal';



const ViewProfileModal = ({ onClose, isProfileModalopen, }) => {

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };
    const [modalStates2, setModalStates2] = useState({});

    const handleSenderModal = () => {
        const updatedStates = Object.fromEntries(
            Object.entries(modalStates2).map(([modalId]) => [modalId, false])
        );
        setModalStates2({
            ...updatedStates,
            simpleModal: true, // Use a generic key like 'simpleModal'
        });
    };

    const handleSenderModalClose = () => {
        setModalStates2((prevStates) => ({
            ...prevStates,
            simpleModal: false, // Use the same generic key used for opening
        }));
    }

    return (
        <div className={`viewProfile-modal-overlay ${isProfileModalopen ? 'active' : ''}`} onClick={onClose}>
            <div className="viewProfile-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='viewprofileheader'>
                    <h5>Employee Details</h5>
                    <div className='block12'>
                        <div className='block13'> <img src={block} alt="" /><h6>Block Employee</h6></div>
                        <span className="close-btn" onClick={onClose}><img src={closeicon} alt="" onClick={onClose} />
                        </span>
                    </div>

                </div>
                <div>
                    <hr />
                </div>

                <div className='viewProfile-content'>

                    <div className='viewprofile-left'>
                        <img src={profile} alt="" style={{ width: '180px', height: '180px' }} />

                        <div className='viewprofile-details'>
                            <h6>Lorem Ipsum</h6>
                            <div className='employeer_detailsss'>
                                <img src={employee} alt="" />
                                <span><span style={{ color: '#000000B2' }}>EMPLOYEE ID  - </span> 012345</span>
                            </div>

                            <div className='employeer_detailsss'>
                                <img src={email} alt="" />
                                <span><span style={{ color: '#000000B2' }}>EMAIL  - </span> loremipsum@gmail.com</span>
                            </div>
                            <div className='employeer_detailsss'>
                                <img src={call} alt="" />
                                <span> <span style={{ color: '#000000B2' }}>CONTACT NO.  - </span> +41 1234567890</span>
                            </div>
                            <div className="profile-permission">
                                <h3>Permission</h3>
                                <div className="profile-switchbtn">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider1 round"></span>
                                    </label>
                                    <p style={{ color: '#000000', fontWeight: "600", fontSize: '18px' }}>Super-Admin</p>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider1 round"></span>
                                    </label>
                                    <p style={{ color: '#000000', fontWeight: "600", fontSize: '18px' }}>Admin</p>
                                </div>
                                <div className="profile-switchbtn1">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider1 round"></span>
                                    </label>
                                    <p style={{ color: '#000000', fontWeight: "600", fontSize: '18px' }}>Manager</p>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider1 round"></span>
                                    </label>
                                    <p style={{ color: '#000000', fontWeight: "600", fontSize: '18px' }}>Admin</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='history1222'>
                        <h5>Login History</h5>
                        <div className='viewprofile-right'>
                            <div className='login-history'>
                                <div>
                                    <span>HH : MM  ( DD/ MM / YYYY )</span>
                                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                                        <MdOutlineHistory style={{ marginRight: '4px', marginLeft: '50px' }} />20 Mins Ago
                                    </p>
                                </div>
                                <div className='circlelogin'>

                                </div>
                                <img src={loaction} alt="" style={{ width: '30px', height: "30px" }} />
                                <span>State, City, Country</span>
                            </div>
                            <div className='login-history'>
                                <div>
                                    <span>HH : MM  ( DD/ MM / YYYY )</span>
                                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                                        <MdOutlineHistory style={{ marginRight: '4px', marginLeft: '50px' }} />20 Mins Ago
                                    </p>
                                </div>
                                <div className='circlelogin'>

                                </div>
                                <img src={loaction} alt="" style={{ width: '30px', height: "30px" }} />
                                <span>State, City, Country</span>
                            </div>
                            <div className='login-history'>
                                <div>
                                    <span>HH : MM  ( DD/ MM / YYYY )</span>
                                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                                        <MdOutlineHistory style={{ marginRight: '4px', marginLeft: '50px' }} />20 Mins Ago
                                    </p>
                                </div>
                                <div className='circlelogin'>

                                </div>
                                <img src={loaction} alt="" style={{ width: '30px', height: "30px" }} />
                                <span>State, City, Country</span>
                            </div>
                            <div className='login-history'>
                                <div>
                                    <span>HH : MM  ( DD/ MM / YYYY )</span>
                                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                                        <MdOutlineHistory style={{ marginRight: '4px', marginLeft: '50px' }} />20 Mins Ago
                                    </p>
                                </div>
                                <div className='circlelogin'>

                                </div>
                                <img src={loaction} alt="" style={{ width: '30px', height: "30px" }} />
                                <span>State, City, Country</span>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="profile-permission122">
                    <h3>Documents Submitted</h3>
                    <div className='btnuploaddoc123'>
                        <div className="Profile-inputs123">
                            <i>
                                <img src={doc} alt="" />
                            </i>
                            <input type="text" placeholder="Document 1" />
                            <i onClick={handleSenderModal}>
                                <img src={dot} alt="" />
                                <Threeline6
                                    isOpen={modalStates2.simpleModal || false}
                                    onClose={handleSenderModalClose}
                                />
                            </i>
                        </div>

                        <div className='infodate'>
                            <img src={info} alt="" style={{ width: '30px', height: '30px' }} />
                            <span><span>EXPIRING ON -</span>  DD / MM / YYYY</span>
                        </div>
                    </div>
                    <div className='btnuploaddoc123'>
                        <div className="Profile-inputs123">
                            <i>
                                <img src={doc} alt="" />
                            </i>
                            <input type="text" placeholder="Document 1" />
                            <i>
                                <img src={dot} alt="" />
                            </i>
                        </div>

                        <div className='infodate'>
                            <img src={info} alt="" style={{ width: '30px', height: '30px' }} />
                            <span><span>EXPIRING ON -</span>  DD / MM / YYYY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfileModal;