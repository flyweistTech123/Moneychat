// Modal.js
import React from 'react';
import './InfforModal.css';
import { IoMdClose } from "react-icons/io";

const Infffo = ({ onClose, children }) => {
  return (
    <div className="Inffomodal-overlay" onClick={onClose}>
      <div className="Inffomodal-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        {children}
      </div>
    </div>
  );
};

export default Infffo;