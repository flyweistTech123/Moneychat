// Modal.js
import React from 'react';
import './Imodel.css';
import { IoMdClose } from "react-icons/io";

const Imodel = ({ onClose, children }) => {
  return (
    <div className="Imodal-overlay" onClick={onClose}>
      <div className="Imodal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Imodel;
