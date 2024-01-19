// Modal.js
import React from 'react';
import './EmailCommunication.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import closeicon from '../../Images/closeicon.png'


const EmailCommunicarion = ({ onClose, isDocumentationModalOpen, children }) => {
  return (
    <div className={`Email-modal-overlay ${isDocumentationModalOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="Email-modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EmailCommunicarion;
