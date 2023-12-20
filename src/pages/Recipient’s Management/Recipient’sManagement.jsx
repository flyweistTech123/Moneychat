/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './Recipient’s Management.css'
import profile from '../../Images/profile.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";
import info from '../../Images/information.png'
import { useState } from "react";
import TransactionsFilter from "../../Component/Modals/FilterModals/TransactionsFilter";
import { Inffo, Threeline4, Threeline5 } from "../../Component/TransactionModal";
import Infffo from "../../Component/Modals/InfforModal/InfoModal"
import closeicon from '../../Images/closeicon.png'


import CopyText from "../../Component/CopyText";
import {
    SenderModal,
    TransactionModal,
    ReciverModal,
} from "../../Component/TransactionModal";





const data = [
    {
        id: "ABCD123451",
        date: "DD/MM/YYYY",
        time: " (6:30 AM)",
        receiver: "Lorem Ipsum",
        redrecipientsName: "Lorem Ipsum",
        image: profile,
        phonenumber: "+41 1234567890",
        email: "loremipsum@gmail.com",
        deliverymethod: 'Bank Transfer',
        transaction: "LAST TRANSACTION ",
        time: '( DD/MM/YYYY )',
        amount: '£ 500'
    },
    {
        id: "ABCD12342",
        date: "DD/MM/YYYY",
        time: " (6:30 AM)",
        receiver: "Lorem Ipsum",
        recipientsName: "Lorem Ipsum",
        image: profile,
        phonenumber: "+41 1234567890",
        email: "loremipsum@gmail.com",
        deliverymethod: 'Bank Transfer',
        transaction: "LAST TRANSACTION ",
        time: '( DD/MM/YYYY )',
        amount: '£ 500'
    },
    {
        id: "ABCD12343",
        date: "DD/MM/YYYY",
        time: " (6:30 AM)",
        receiver: "Lorem Ipsum",
        redrecipientsName: "Lorem Ipsum",
        image: profile,
        phonenumber: "+41 1234567890",
        email: "loremipsum@gmail.com",
        deliverymethod: 'Bank Transfer',
        transaction: "LAST TRANSACTION ",
        time: '( DD/MM/YYYY )',
        amount: '£ 500'
    },
    {
        id: "ABCD12344",
        date: "DD/MM/YYYY",
        time: " (6:30 AM)",
        receiver: "Lorem Ipsum",
        recipientsName: "Lorem Ipsum",
        image: profile,
        phonenumber: "+41 1234567890",
        email: "loremipsum@gmail.com",
        deliverymethod: 'Bank Transfer',
        transaction: "LAST TRANSACTION ",
        time: '( DD/MM/YYYY )',
        amount: '£ 500'
    },
    {
        id: "ABCD12345",
        date: "DD/MM/YYYY",
        time: " (6:30 AM)",
        receiver: "Lorem Ipsum",
        redrecipientsName: "Lorem Ipsum",
        image: profile,
        phonenumber: "+41 1234567890",
        email: "loremipsum@gmail.com",
        deliverymethod: 'Bank Transfer',
        transaction: "LAST TRANSACTION ",
        time: '( DD/MM/YYYY )',
        amount: '£ 500'
    },
];

const RecipientSManagement = () => {
    const [isfilterModalOpen, setFilterModaOpen] = useState(false);
    const [modalStates3, setModalStates3] = useState({});
    const [isRepostOpen, setRepostOpen] = useState(false)
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


    const openFilterModal = () => {
        setFilterModaOpen(true);
    };

    const closeFilterModal = () => {
        setFilterModaOpen(false);
    };

    const openRepostModal = () => {
        setRepostOpen(true);
    }

    const closeRepostModal = () => {
        setRepostOpen(false);
    }
    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);
    const priceGap = 1000;

    const handlePriceInputChange = (e) => {
        let value = parseInt(e.target.value, 10);

        if (e.target.className === "input-min" && (maxPrice - value >= priceGap) && maxPrice <= 10000) {
            setMinPrice(value);
        } else if (e.target.className === "input-max" && (value - minPrice >= priceGap) && value <= 10000) {
            setMaxPrice(value);
        }
    };

    const handleRangeInputChange = (e) => {
        let value = parseInt(e.target.value, 10);

        if (e.target.className === "range-min" && (maxPrice - value) >= priceGap) {
            setMinPrice(value);
        } else if (e.target.className === "range-max" && (value - minPrice) >= priceGap) {
            setMaxPrice(value);
        }
    };
    const navigate = useNavigate()
    return (
        <>
            <section className="pages">
                <div className="Headingall1">
                    <h5>Recipient’s Management</h5>
                    <div className="search">
                        <div>
                            <i><IoSearch /></i>
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>

                    <div className="button_container">
                        <button className="filter" onClick={openFilterModal}>
                            <img src="./Image/16.png" alt="" />
                            <span>FILTERS</span>
                        </button>
                    </div>
                </div>
                <div className="racipienttable">
                    <table>
                        <thead>
                            <tr>
                                <th>Recipient’s Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Delivery Method</th>
                                <th>Transaction Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((i, index) => (
                                <tr key={index}>
                                    <td>
                                        {i.recipientsName ? (
                                            <div className="profilediv">
                                                <img src={i.image} alt="Profile" style={{ marginRight: "8px" }} />
                                                <span style={{ display: 'flex', textAlign: 'center' }}>{i.recipientsName}</span>
                                                {/* <img src={info} alt="Profile" style={{ marginLeft: "8px",  }} /> */}
                                            </div>
                                        ) : (<div className="profilediv">
                                            <img src={i.image} alt="Profile" style={{ marginRight: "8px", border: '1px solid #FD575B', borderRadius: '50px' }} />
                                            <span style={{ display: 'flex', textAlign: 'center', color: '#FD575B' }}>{i.redrecipientsName}</span>
                                            <span className="cursor_class">
                                                <span onClick={() => handleinfoModal(i.id)}>
                                                    <img src={info} alt="" />
                                                </span>
                                                <Inffo
                                                    isOpen={modalStates3[i.id] || false}
                                                    onClose={() => handleinfoModalClose(i.id)}
                                                />
                                            </span>{" "}
                                        </div>
                                        )}
                                    </td>
                                    <td>
                                        <span>{i.phonenumber}</span>
                                    </td>
                                    <td>
                                        <span>{i.email}</span>
                                    </td>
                                    <td>
                                        <span style={{ color: '#000000' }}>{i.deliverymethod}</span>
                                    </td>
                                    <td>
                                        <div className="profilediv">
                                            <span style={{ display: 'flex', textAlign: 'center', fontSize: '14px' }}>{i.transaction}</span>
                                            <img
                                                style={{ marginLeft: "8px" }}
                                                src="./Image/18.png"
                                                alt=""
                                                onClick={openRepostModal}
                                            />
                                        </div>
                                        <p style={{ margin: 0 }}>
                                            <span>{i.amount}</span>{i.time}
                                        </p>
                                    </td>
                                    <td>
                                        <span className="cursor_class">
                                            <span onClick={() => handleThreeModal(i.id)}>
                                                <img src={lines} alt="" />
                                            </span>
                                            <Threeline4
                                                isOpen={modalStates2[i.id] || false}
                                                onClose={() => handleThreeModalClose(i.id)}
                                            />
                                        </span>{" "}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination">
                    <button>
                        {" "}
                        <i><FaChevronLeft /></i>PREVIOUS
                    </button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>
                        NEXT <i><FaChevronRight /></i>
                    </button>
                </div>


                {isfilterModalOpen && (
                    <TransactionsFilter onClose={closeFilterModal} isfilterModalOpen={isfilterModalOpen}>
                        <div className="transactionfilter">
                            <h2>Filter</h2>
                            <div className="lines2">
                                <hr />
                            </div>
                            <div className="content">
                                <h3>Amount Range</h3>
                                <div className="rangebox">
                                    <div className="slider">
                                        <div className="progress" style={{ left: `${(minPrice / 10000) * 100}%`, right: `${100 - (maxPrice / 10000) * 100}%` }}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value={minPrice} step="100" onChange={handleRangeInputChange} />
                                        <input type="range" className="range-max" min="0" max="10000" value={maxPrice} step="100" onChange={handleRangeInputChange} />
                                    </div>
                                </div>
                                <div className="values">
                                    <span>0</span>
                                    <span>300</span>
                                    <span>500</span>
                                    <span>&gt;1000</span>
                                    <span>&gt;5000</span>
                                </div>
                                <div className="price-input">
                                    <div className="field">
                                        <span>From</span>
                                        <input type="number" className="input-min" value={minPrice} onChange={handlePriceInputChange} />
                                    </div>
                                    <div className="field">
                                        <span>To</span>
                                        <input type="number" className="input-max" value={maxPrice} onChange={handlePriceInputChange} />
                                    </div>
                                </div>
                                <div className='Designation'>
                                    <h3>Delivery Method</h3>
                                    <div className="selectdesignation">
                                        <div className="label1">
                                            <input
                                                type="checkbox"
                                            />
                                            <label>Bank Transfer</label>
                                        </div>
                                        <div className="label1">
                                            <input
                                                type="checkbox"
                                            />
                                            <label >Cash Pickup</label>
                                        </div>
                                        <div className="label1">
                                            <input
                                                type="checkbox"
                                            />
                                            <label>Lorem Ipsum</label>
                                        </div>
                                        <div className="label1">
                                            <input
                                                id="checkbox1"
                                                type="checkbox"
                                                role="checkbox" />
                                            <label>Lorem Ipsum</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="datarange">
                                    <h3>Recipients</h3>

                                    <div>
                                        <select>
                                            <option>Select</option>
                                            <option >All Recipients</option>
                                            <option >Restricted Recipients ( $10,000 limit Crossed ) </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="btn1">
                                    <button className="searchbtn" onClick={closeFilterModal}>SEARCH</button>
                                    <button className="resetbtn">RESET</button>
                                </div>


                            </div>

                        </div>
                    </TransactionsFilter>
                )}
                {isRepostOpen && (
                    <Infffo onClose={closeRepostModal}>
                        <div className="repostheder">
                            <div>
                                <h3>All Transactions</h3>
                            </div>
                            <div className="repostimg">
                                <img src={closeicon} onClick={closeRepostModal}></img>
                            </div>
                        </div>
                        <div>
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
                                        {data?.map((i, index) => (
                                            <tr key={index}>
                                                <td >
                                                    {i.date} <span style={{ color: "#0070BC", fontSize: '18px' }}> {i.time} </span>
                                                </td>
                                                <td>
                                                    <span className="amount_td" >
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
                                                    <span>{i.deliverymethod}</span>
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
                    </Infffo>
                )}
            </section>
        </>
    );
};

export default HOC(RecipientSManagement)