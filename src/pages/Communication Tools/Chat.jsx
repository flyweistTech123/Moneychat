import React from 'react';
import './Chat.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import closeicon from '../../Images/closeicon.png'


const EmailCommunicarion = ({ onClose, isDocumentationModalOpen, children }) => {
  return (
    <div className={`Chat-modal-overlay ${isDocumentationModalOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="Chat-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}><img src={closeicon} alt="" onClick={onClose}  style={{width:'50px', height:'50px'}}/>
        </span>
        {children}
      </div>
    </div>
  );
};

export default EmailCommunicarion;