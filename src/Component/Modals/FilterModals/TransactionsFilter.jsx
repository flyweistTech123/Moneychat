import React, { useState, useEffect } from 'react';
import './TransactionsFilter.css';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCloseCircle } from "react-icons/ai";
import closeicon from '../../../Images/closeicon.png'

const TransactionsFilter = ({ onClose, children }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsActive(true);
        }, 50);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`filtermodal-overlay ${isActive ? 'active' : ''}`} onClick={onClose}>
            <div className={`filtermodal-content ${isActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="close-icon-container">
                    <img src={closeicon} alt=""  onClick={onClose}/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default TransactionsFilter;
