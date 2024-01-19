// Modal.js
import React from 'react';
import './DocumentationModal.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import closeicon from '../../Images/closeicon.png'


const DucmentModal = ({ onClose, isDocumentationModalOpen, children }) => {
  return (
    <div className={`modal-overlay ${isDocumentationModalOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
       
        {children}
      </div>
    </div>
  );
};

export default DucmentModal;
