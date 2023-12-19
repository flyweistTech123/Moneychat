// Modal.js
import React from 'react';
import './SenderList.css';
import { IoMdClose } from "react-icons/io";

const SenderList = ({ onClose, children }) => {
  return (
    <div className="senderlistmodal-overlay" onClick={onClose}>
      <div className="senderlistmodal-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        {children}
      </div>
    </div>
  );
};

export default SenderList;
