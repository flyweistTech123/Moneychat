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
                        <button className="filter">
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
                                            <img src={i.image} alt="Profile" style={{ marginRight: "8px",border:'1px solid #FD575B', borderRadius:'50px'}} />
                                            <span style={{ display: 'flex', textAlign: 'center', color:'#FD575B' }}>{i.redrecipientsName}</span>
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
            </section>
        </>
    );
};

export default HOC(RecipientSManagement)