// Modal.js
import React from 'react';
import './OpendocumentModal.css';
import { IoMdClose } from "react-icons/io";

const OpendocumentModal = ({ onClose, children }) => {
  return (
    <div className="OpendocumentModal-overlay" onClick={onClose}>
      <div className="OpendocumentModal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default OpendocumentModal;
