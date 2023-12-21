import React, { useState, useEffect } from 'react';
import './ProfileModal.css';
import closeicon from '../../../Images/closeicon.png'

const ProfileModal = ({ onClose, children }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsActive(true);
        }, 50);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`Profilemodal-overlay ${isActive ? 'active' : ''}`} onClick={onClose}>
            <div className={`Profilemodal-content ${isActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="close-icon-container">
                    <img src={closeicon} alt=""  onClick={onClose}/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ProfileModal;