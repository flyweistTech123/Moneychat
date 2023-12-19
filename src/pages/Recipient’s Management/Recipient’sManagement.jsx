/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './Recipient’s Management.css'
import plus from '../../Images/plu.png'
import profile from '../../Images/profile.png'
import staff from '../../Images/staf.png'
import { MdOutlineHistory } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import info from '../../Images/information.png'
import { useState } from "react";
import TransactionsFilter from "../../Component/Modals/FilterModals/TransactionsFilter";





const data = [
    {
        // recipientsName: "Lorem Ipsum",
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


    const openFilterModal = () => {
        setFilterModaOpen(true);
    };

    const closeFilterModal = () => {
        setFilterModaOpen(false);
    };
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
                                            <img src={info} alt="Profile" style={{ marginLeft: "8px" }} />
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
                                            />                    </div>
                                        <p style={{ margin: 0 }}>
                                            <span>{i.amount}</span>{i.time}
                                        </p>
                                    </td>
                                    <td>
                                        <img src={lines} alt="" />
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
            </section>
        </>
    );
};

export default HOC(RecipientSManagement)