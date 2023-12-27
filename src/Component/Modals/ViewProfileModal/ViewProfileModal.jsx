import React from 'react';
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




const ViewProfileModal = ({ onClose, isProfileModalopen, }) => {

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <div className={`viewProfile-modal-overlay ${isProfileModalopen ? 'active' : ''}`} onClick={onClose}>
            <div className="viewProfile-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='viewprofileheader'>
                    <h5>Employee Details</h5>
                    <span className="close-btn" onClick={onClose}><img src={closeicon} alt="" onClick={onClose} />
                    </span>
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
                                    <p style={{ color: '#000000', fontWeight: "600", fontSize: '18px' }}>Lorem Ipsum</p>
                                </div>
                                <div className="switchbtn">
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

                <div className='profile-documenet'>
                    <span>Documents Submitted</span>
                    <div className='profile-documentsss'>
                        <div className="Profile-inputs">
                            <i>
                                <img src={doc} alt="" />
                            </i>
                            <input type="text" placeholder="Document 1" />
                        </div>
                        <div className='info-viewprofile'>
                            <img src={info} alt="" style={{ width: '30px', height: '30px' }} />
                            <span>EXPIRING ON -  DD / MM / YYYY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfileModal;