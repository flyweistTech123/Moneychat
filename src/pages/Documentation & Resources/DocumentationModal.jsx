// Modal.js
import React from 'react';
import './DocumentationModal.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const DucmentModal = ({ onClose, isDocumentationModalOpen, children }) => {
  return (
    <div className={`modal-overlay ${isDocumentationModalOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}><AiOutlineCloseCircle style={{width:'50px', height:'50px'}} /></span>
        {children}
      </div>
    </div>
  );
};

export default DucmentModal;
