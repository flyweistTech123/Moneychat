// Modal.js
import React from 'react';
import './Repost.css';
import smallcross from '../../../Images/smallcross.png'
import arrowbtn from '../../../Images/arrowbtn.png'

const AddNote = ({ onClose, children }) => {

  return (
    <div className="Repostmodal-overlay" onClick={onClose}>
      <div className="Repostmodal-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        <div className="repostconatiner">
          <div className="repostheder">
            <div>
              <h3>Add Note</h3>
            </div>
            <div className="repostimg">
              <img src={smallcross} onClick={onClose}></img>
            </div>
          </div>
          <div className="repostline">
            <hr />
          </div>
          <div className="textarea1">
            <textarea rows="6" cols="30" placeholder="Type Here.........."></textarea>
          </div>
        </div>
        <div className="btn12">
          <button className="exportbtn" onClick={onClose}>SAVE</button>
          <div className="cancelbtn1">
            <img src={arrowbtn}></img>
            <button className="cancelbtn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;