import React, { useEffect, useState, useRef } from 'react';
import './EditProfileModal.css';
import closeicon from '../../../Images/closeicon.png'
import profile from '../../../Images/profilerepost.png'
import employee from '../../../Images/staf.png'
import call from '../../../Images/profilecall.png'
import email from '../../../Images/profileemail.png'
import info from '../../../Images/redinfomodal.png'
import Recipient from '../TransactionRepost/Recipient';
import greentag from '../../../Images/greentick.png'
import biggreen from '../../../Images/biggreentick.png'
import ids from '../../../Images/ids12.png'
import plusicon from '../../../Images/plusicon.png'
import money from '../../../Images/money.png'
import secondmoney from '../../../Images/secondmoney.png'
import CopyText from "../../../Component/CopyText";
import {
    TransactionModal,
    ReciverModal,
} from "../../../Component/TransactionModal";


const Editprofile = ({ onClose, isProfileModalopen, }) => {
    const [isRepostOpen1, setRepostOpen1] = useState(false)
    const openRepostModal1 = () => {
        setRepostOpen1(true);
    }

    const closeRepostModal1 = () => {
        setRepostOpen1(false);
    }

    const [verifyed, setVerifyed] = useState(false)
    const [step, setStep] = useState(0);
    const data1 = [
        {
            id: "ABCD12341",
            date: "DD/MM/YYYY",
            time: " (6:30 AM)",
            amount: '£ 500',
            deliverymethod: 'Bank Transfer',
            receiver: "Lorem Ipsum"
        },
        {
            id: "ABCD12342",
            date: "DD/MM/YYYY",
            time: " (6:30 AM)",
            amount: '£ 500',
            deliverymethod: 'Bank Transfer',
            receiver: "Lorem Ipsum"
        },
        {
            id: "ABCD12343",
            date: "DD/MM/YYYY",
            time: " (6:30 AM)",
            amount: '£ 500',
            deliverymethod: 'Bank Transfer',
            receiver: "Lorem Ipsum"
        },
    ]

    const [modalStates3, setModalStates3] = useState({});
    const [modalStates, setModalStates] = useState({});
    const [receviermodalStates, setrecevierSenderModalStates] = useState({});
    const [hoveredId, setHoveredId] = useState(null);

    // For Transaction Modal
    const handleModalOpen = (id) => {
        const updatedStates = Object.fromEntries(
            Object.entries(modalStates).map(([modalId]) => [modalId, false])
        );
        setModalStates({
            ...updatedStates,
            [id]: true,
        });
    };

    const handleModalClose = (id) => {
        setModalStates((prevStates) => ({
            ...prevStates,
            [id]: false,
        }));
    };




    // for reciever
    const handleReciverModal = (id) => {
        const updatedStates = Object.fromEntries(
            Object.entries(receviermodalStates).map(([modalId]) => [modalId, false])
        );
        setrecevierSenderModalStates({
            ...updatedStates,
            [id]: true,
        });
    };

    const handlerReciverModalClose = (id) => {
        setrecevierSenderModalStates((prevStates) => ({
            ...prevStates,
            [id]: false,
        }));
    };


    const handleinfoModal = (id) => {
        const updatedStates = Object.fromEntries(
            Object.entries(modalStates2).map(([modalId]) => [modalId, false])
        );
        setModalStates3({
            ...updatedStates,
            [id]: true,
        });
    };
    const handleinfoModalClose = (id) => {
        setModalStates3((prevStates) => ({
            ...prevStates,
            [id]: false,
        }));
    };

    const [modalStates2, setModalStates2] = useState({});
    const handleThreeModal = (id) => {
        const updatedStates = Object.fromEntries(
            Object.entries(modalStates2).map(([modalId]) => [modalId, false])
        );
        setModalStates2({
            ...updatedStates,
            [id]: true,
        });
    };
    const handleThreeModalClose = (id) => {
        setModalStates2((prevStates) => ({
            ...prevStates,
            [id]: false,
        }));
    };







    return (
        <div className={`viewProfile-modal-overlay ${isProfileModalopen ? 'active' : ''}`} onClick={onClose}>
            <div className="viewProfile-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='viewprofileheader'>
                    <h5>Recipient Details</h5>
                    <span className="close-btn1" onClick={onClose}><img src={closeicon} alt="" onClick={onClose} />
                    </span>
                </div>
                <div>
                    <hr />
                </div>

                <div className='edit-profile-content'>

                    <div className='edit-profile-detals'>
                        <div className='biggreentick'>
                            <img src={profile} alt="" />
                            {verifyed ? (
                                <img src={biggreen} alt="" className='tick-mark' />

                            ) : (
                                " "
                            )}
                        </div>
                        <div className='edit-profile-span'>
                            <div className='edit-profile-span2'>
                                <span>Lorem Ipsum</span>
                                <div className='status-acc'>
                                    <span>ACCOUNT STATUS  - </span>
                                    {verifyed ? (
                                        <div style={{ display: 'flex', gap: "20px" }}>
                                            <img src={greentag} alt="" />
                                            <span style={{ color: '#3BB54A' }}>VERIFIED</span>
                                        </div>

                                    ) : (
                                        <div onClick={() => setVerifyed(true)} style={{ display: 'flex', gap: "20px" }} >
                                            <img src={info} alt="" />
                                            <span style={{ color: '#FD575B' }}>NOT VERIFIED</span>
                                        </div>

                                    )}


                                    <span> ( EXPIRING ON DD/MM/YYYY) </span>
                                </div>
                            </div>
                            <div className='verify34'>
                                <button className='verify' onClick={openRepostModal1}>VERIFY NOW</button>
                                {isRepostOpen1 && (
                                    <Recipient onClose={closeRepostModal1}>

                                    </Recipient>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="pay1">
                        <div
                            className={step === 0 ? "pay2 active" : "pay3"}
                            onClick={() => setStep(0)}
                        >
                            <h3>PERSONAL DETAILS</h3>
                        </div>
                        <div
                            className={step === 1 ? "pay2 active" : "pay3"}
                            onClick={() => setStep(1)}
                        >
                            <h3>TRANSACTION DETAILS</h3>
                        </div>
                    </div>

                    <div className='transactiondetails36'>
                        <div className='transactiondetails37'>
                            {/* Indicator line */}
                        </div>
                        <div className={step==0? 'transactiondetails38': 'transactiondetails39'}>
                            {/* Active content */}
                        </div>
                        <div className={step==1? 'transactiondetails39': 'transactiondetails38'}>
                            {/* Active content */}
                        </div>
                    </div>
                </div>





                {step === 0 ? (
                    <div className='Note-eidy'>


                        <div className='edit-Note-profile'>
                            <div className='employeer_detailsss'>
                                <img src={employee} alt="" />
                                <span><span style={{ color: '#000000B2' }}>EMPLOYEE ID  - </span> 012345</span>
                            </div>

                            <div className='employeer_detailsss'>
                                <img src={email} alt="" />
                                <span><span style={{ color: '#000000B2' }}>EMAIL  - </span> loremipsum@gmail.com</span>
                            </div>
                            <div className='employeer_detailsss'>
                                <img src={call} alt="" />
                                <span> <span style={{ color: '#000000B2' }}>CONTACT NO.  - </span> +41 1234567890</span>
                            </div>
                            {verifyed ? (
                                <div>
                                    <div className='employeer_detailsss'>
                                        <img src={ids} alt="" />
                                        <span> <span style={{ color: '#000000B2' }}>ID - </span> ABC1234567</span>
                                    </div>
                                    <div className='employeer_detailsss'>
                                        <span style={{ color: '#000000B2', marginLeft: '50px' }}>EXPIRING ON DD/MM/YYYY</span>
                                    </div>
                                </div>

                            ) : (
                                " "
                            )}
                        </div>

                        <div className='text-notesss'>
                            <label htmlFor="">Notes</label>
                            <textarea name="" id="" cols="50" rows="6"></textarea>
                        </div>
                    </div>
                ) : step === 1 ? (

                    <div className='transactiondetails31'>

                        <div className='transactiondetails32'>
                            <div className='transactiondetails35'>
                                <select id="timeRange">
                                    <option value="This Week">THIS WEEK</option>
                                    <option value="This Month">THIS MONTH</option>
                                    <option value="Custom">CUSTOM</option>
                                    <option value="All Time">ALL TIME</option>
                                </select>
                            </div>

                            <div className='transactiondetails33'>
                                <img src={money} alt="" />
                                <div className='transactiondetails34'>
                                    <h6>Total Transactions</h6>
                                    <h2>6,540</h2>
                                </div>
                            </div>
                            <div className='transactiondetails33'>
                                <img src={secondmoney} alt="" />
                                <div className='transactiondetails34'>
                                    <h6>Total Transactions</h6>
                                    <h2>6,540</h2>
                                </div>
                            </div>
                        </div>
                        <div className="conatainerabless">
                            <div className="reviewtable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Amount</th>
                                            <th>Ref. ID</th>
                                            <th>Payment Method</th>
                                            <th>From / To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data1?.map((i, index) => (
                                            <tr key={index}>
                                                <td >
                                                    {i.date} <span style={{ color: "#0070BC", fontSize: '18px' }}> {i.time} </span>
                                                </td>
                                                <td>
                                                    <span className="amount_td" >
                                                        <img src={plusicon} alt="" />
                                                        <span style={{ color: '#000000', fontSize: '25px' }}> {i.amount} </span>
                                                        <img
                                                            src="./Image/18.png"
                                                            alt=""
                                                            onClick={() => handleModalOpen(i.id)}
                                                        />
                                                        <TransactionModal
                                                            isOpen={modalStates[i.id] || false}
                                                            onClose={() => handleModalClose(i.id)}
                                                        />
                                                    </span>{" "}
                                                </td>
                                                <td
                                                    onMouseEnter={() => setHoveredId(i.id)}
                                                    onMouseLeave={() => setHoveredId(null)}
                                                >
                                                    {hoveredId === i.id ? <CopyText text={i.id} /> : i.id}
                                                </td>
                                                <td>
                                                    <span style={{ color: '#000000' }}>{i.deliverymethod}</span>
                                                </td>
                                                <td>

                                                    <span className="cursor_class">
                                                        <span onClick={() => handleReciverModal(i.id)}>
                                                            {i.receiver}{" "}
                                                        </span>
                                                        <ReciverModal
                                                            isOpen={receviermodalStates[i.id] || false}
                                                            onClose={() => handlerReciverModalClose(i.id)}
                                                        />
                                                    </span>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                ) : (
                    " "
                )}






            </div>
        </div>
    );
};

export default Editprofile;