// Modal.js
import React from 'react';
import './Repost.css';
import smallcross from '../../../Images/smallcross.png'
import arrowbtn from '../../../Images/arrowbtn.png'


const Recipient = ({ onClose, children }) => {
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <div className="Repostmodal-overlay" onClick={onClose}>
            <div className="Repostmodal-content" onClick={(e) => e.stopPropagation()}>
                {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
                <div className="repostconatiner">
                    <div className="repostheder">
                        <div>
                            <h3>Recipient Verification</h3>
                        </div>
                        <div className="repostimg">
                            <img src={smallcross} onClick={onClose}></img>
                        </div>
                    </div>
                    <div className="repostline">
                        <hr />
                    </div>
                    <div className="employdatials">
                        <div className="employ-datials">
                            <span>Recipient ID</span>
                            <input type="text" className="input-min" placeholder="Enter Lorem Ipsum" />
                        </div>
                        <div className="employ-datials">
                            <span>Expiry Date</span>
                            <input type="date" className="input-max" />
                        </div>
                        <div className="employ-datials">
                            <span>Add Notes</span>
                            <input type="text" className="input-max" placeholder="Type Here....." />
                        </div>
                    </div>
                </div>

                <div className="btn12">
                    <button className="exportbtn" onClick={onClose}>SAVE & ADD</button>
                    <div className="cancelbtn1">
                        <img src={arrowbtn}></img>
                        <button className="cancelbtn" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipient;