// Modal.js
import React from 'react';
import './Order.css';
import { IoMdClose } from "react-icons/io";

const Order = ({ onClose, children }) => {
  return (
    <div className="senderlistmodal-overlay" onClick={onClose}>
      <div className="Ordermodal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Order;
