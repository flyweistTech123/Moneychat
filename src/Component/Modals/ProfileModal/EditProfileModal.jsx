import React, { useState } from 'react';
import './EditProfileModal.css';
import closeicon from '../../../Images/closeicon.png'
import profile from '../../../Images/profilerepost.png'
import employee from '../../../Images/staf.png'
import call from '../../../Images/profilecall.png'
import email from '../../../Images/profileemail.png'
import info from '../../../Images/redinfomodal.png'
import Recipient from '../TransactionRepost/Recipient';




const Editprofile = ({ onClose, isProfileModalopen, }) => {
    const [isRepostOpen, setRepostOpen] = useState(false)
    const openRepostModal = () => {
      setRepostOpen(true);
    }
  
    const closeRepostModal = () => {
      setRepostOpen(false);
    }

    return (
        <div className={`viewProfile-modal-overlay ${isProfileModalopen ? 'active' : ''}`} onClick={onClose}>
            <div className="viewProfile-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='viewprofileheader'>
                    <h5>Recipient Details</h5>
                    <span className="close-btn1" onClick={onClose}><img src={closeicon} alt="" onClick={onClose} />
                    </span>
                </div>
                <div>
                    <hr />
                </div>

                <div className='edit-profile-content'>

                    <div className='edit-profile-detals'>
                        <img src={profile} alt="" />
                        <div className='edit-profile-span'>
                            <div className='edit-profile-span2'>
                                <span>Lorem Ipsum</span>
                                <div className='status-acc'>
                                    <span>ACCOUNT STATUS  - </span>
                                    <img src={info} alt="" />
                                    <span style={{ color: '#FD575B' }}>NOT VERIFIED</span>
                                    <span> ( EXPIRING ON DD/MM/YYYY) </span>
                                </div>
                            </div>
                            <div className='verify34'>
                                <button className='verify' onClick={openRepostModal}>VERIFY NOW</button>
                                {isRepostOpen && (
                                    <Recipient onClose={closeRepostModal}>

                                    </Recipient>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='edit-personal'>
                    <span>PERSONAL DETAILS</span>
                    <span>TRANSACTION DETAILS</span>
                </div>



                <div className='edit-profile-range'>
                    <input type="range" />
                </div>

                <div className='Note-eidy'>


                    <div className='edit-Note-profile'>
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
                    </div>

                    <div className='text-notesss'>
                        <label htmlFor="">Notes</label>
                        <textarea name="" id="" cols="50" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editprofile;