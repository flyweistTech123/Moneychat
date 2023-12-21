// Modal.js
import React from 'react';
import './Repost.css';
import { IoMdClose } from "react-icons/io";
import smallcross from '../../../Images/smallcross.png'
import arrowbtn from '../../../Images/arrowbtn.png'
import flag from '../../../Images/falg.png'
import fileupload from '../../../Images/fileupload.png'

const Flag = ({ onClose, children }) => {
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
      };
  return (
    <div className="Repostmodal-overlay" onClick={onClose}>
      <div className="Repostmodal-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        <div className="repostconatiner">
          <div className="repostheder">
            <div style={{ display: 'flex', gap: '20px' }}>
              <img src={flag} style={{ width: '39px', height: '39px' }}></img>
              <h3>Flag Transaction</h3>
            </div>
            <div className="repostimg">
              <img src={smallcross} onClick={onClose}></img>
            </div>
          </div>
          <div className="repostline">
            <hr />
          </div>

          <div className="repostselect">
            <div>
              <span>Reason</span>
              <select style={{ width: '100%' }}>
                <option>Select your Reason</option>
                <option >WEEKLY</option>
                <option>MONTHLY</option>
                <option>MONTHLY</option>
                <option >HALF-YEARLY ( 6 MONTHS )</option>
                <option>YEARLY</option>
              </select>
            </div>

          </div>

          <div style={{ marginTop: '2rem' }}><span>Please provide the Required Document & describe your Reason below :</span></div>


          <div className="textarea1">
            <div className="custom-textarea">
              <img src={fileupload} alt="Your Image"  onClick={triggerFileInput}/>
              <h6  onClick={triggerFileInput}>ADD MEDIA</h6>
              <input type="file" id="fileInput" style={{ display: 'none' }} />
              <textarea rows="6" cols="30" placeholder="Type Here.........."></textarea>
            </div>
          </div>
        </div>
        <div className="btn12">
          <button className="exportbtn" onClick={onClose}>SUBMIT</button>
          <div className="cancelbtn1">
            <img src={arrowbtn}></img>
            <button className="cancelbtn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;