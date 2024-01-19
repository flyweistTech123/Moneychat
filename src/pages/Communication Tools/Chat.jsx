import React from 'react';
import './Chat.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import closeicon from '../../Images/closeicon.png'


const EmailCommunicarion = ({ onClose, isDocumentationModalOpen, children }) => {
  return (
    <div className={`Chat-modal-overlay ${isDocumentationModalOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="Chat-modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EmailCommunicarion;