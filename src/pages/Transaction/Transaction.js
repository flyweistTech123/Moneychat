/** @format */

import HOC from "../../layout/HOC";
import { useState } from "react";
import CopyText from "../../Component/CopyText";
import {
  SenderModal,
  TransactionModal,
  ReciverModal,
} from "../../Component/TransactionModal";
import FullScreenLoader from "../../Component/FullScreenLoader";
import { IoSearch } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TransactionsFilter from "../../Component/Modals/FilterModals/TransactionsFilter";
import serndername from '../../Images/sendername.png'
import Currencies from '../../Images/Currencies.png'
import SenderList from "../../Component/Modals/FilterModals/SenderList";
import senderprofile from '../../Images/profilesender.png'
import Us from '../../Images/U.S.png'
import India from '../../Images/Indian.png'
import British from '../../Images/British.png'
import Repost from "../../Component/Modals/TransactionRepost/Repost";
import smallcross from '../../Images/smallcross.png'
import Ascending from '../../Images/asending.png'
import Descending from '../../Images/desending.png'

import setting from '../../Images/setting.png'
import arrowbtn from '../../Images/arrowbtn.png'
import searchicon from '../../Images/searchicon.png'
import { Link } from "react-router-dom";
import Order from "../../Component/Modals/FilterModals/Order";


const data = [
  {
    amount: "£500",
    id: "ABCD12341",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
  {
    amount: " £500",
    id: "ABCD12342",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: " £500",
    id: "ABCD12343",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: "£500",
    id: "ABCD12344",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
  {
    amount: " £500",
    id: "ABCD1235",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
];

const Transaction = () => {
  const [isfilterModalOpen, setFilterModaOpen] = useState(false);
  const [isSenderModallist, setSenderModallist] = useState(false);
  const [isOrder, setorder] = useState(false)
  const [isRepostOpen, setRepostOpen] = useState(false)
  const [isCurrenciesModallist, setCurrenciesModallist] = useState(false)
  const [modalStates, setModalStates] = useState({});
  const [modalStates2, setModalStates2] = useState({});
  const [modalStates3, setModalStates3] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // --------------

  // For Sender Modal
  const handleSenderModal = (id) => {
    const updatedStates = Object.fromEntries(
      Object.entries(modalStates2).map(([modalId]) => [modalId, false])
    );
    setModalStates2({
      ...updatedStates,
      [id]: true,
    });
  };

  const handleSenderModalClose = (id) => {
    setModalStates2((prevStates) => ({
      ...prevStates,
      [id]: false,
    }));
  };
  // --------------

  // for reciever
  const handleReciverModal = (id) => {
    const updatedStates = Object.fromEntries(
      Object.entries(modalStates3).map(([modalId]) => [modalId, false])
    );
    setModalStates3({
      ...updatedStates,
      [id]: true,
    });
  };

  const handlerReciverModalClose = (id) => {
    setModalStates3((prevStates) => ({
      ...prevStates,
      [id]: false,
    }));
  };
  // ---


  const openFilterModal = () => {
    setFilterModaOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModaOpen(false);
  };


  const openSenderModallist = () => {
    setSenderModallist(true);
  }

  const closeSenderModallist = () => {
    setSenderModallist(false);
  }


  const openCurrenciesModallist = () => {
    setCurrenciesModallist(true);
  }

  const closeCurrenciesModallist = () => {
    setCurrenciesModallist(false);
  }

  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }


  const openOrderModal = () => {
    setorder(true);
  }

  const closeOrderModal = () => {
    setorder(false);
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


  const [statusMap, setStatusMap] = useState({}); 

  const handleStatusChange = (id, newStatus) => {
    setStatusMap(prevStatusMap => ({
      ...prevStatusMap,
      [id]: newStatus,
    }));
  };



  return (
    <>
      <FullScreenLoader show={show} handleClose={handleClose} />
      <section className="pages">
        <div className="Heading_all">
          <h5>Transactions</h5>
          <div className="search">
            <img src="./Image/15.png" alt="" onClick={() => handleShow()} />
            <div>
              <i> <img src={searchicon} alt="" /></i>
              <input type="search" placeholder="Search Transaction" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter" onClick={openFilterModal}>
              <img src="./Image/16.png" alt="" />
              <span >FILTERS</span>
            </button>
            <button className="report" onClick={openRepostModal}>
              <img src="./Image/17.png" alt="" />
              <span >REPORT</span>
            </button>
          </div>
        </div>
        <div className="reviewtable">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Ref. ID</th>
                <th>Date & Time</th>
                <th>Sender</th>
                <th>Reciever</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td >
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
                    {i.date} <span style={{ color: "#0070BC", fontSize: '18px' }}> {i.time} </span>
                  </td>
                  <td>
                    <span className="cursor_class">
                      <span onClick={() => handleSenderModal(i.id)}>
                        {i.sender}
                      </span>
                      <SenderModal
                        isOpen={modalStates2[i.id] || false}
                        onClose={() => handleSenderModalClose(i.id)}
                      />
                    </span>{" "}
                  </td>
                  <td>

                    <span className="cursor_class">
                      <span onClick={() => handleReciverModal(i.id)}>
                        {i.receiver}{" "}
                      </span>
                      <ReciverModal
                        isOpen={modalStates3[i.id] || false}
                        onClose={() => handlerReciverModalClose(i.id)}
                      />
                    </span>
                  </td>

                  <td>
                    {statusMap[i.id] ? (
                      <span className={`status ${statusMap[i.id]}`}>
                        {statusMap[i.id].toUpperCase()}
                      </span>
                    ) : (
                      <select onChange={(e) => handleStatusChange(i.id, e.target.value)}>
                        <option>Select Status</option>
                        <option value="complete">COMPLETED</option>
                        <option value="pending">PENDING</option>
                        <option value="failed">FAILED</option>
                        <option value="under_review">UNDER REVIEW</option>
                        <option value="onHold">ON HOLD</option>
                      </select>
                    )}
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



        {/* Notification Modal */}
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
                <div className="datarange">
                  <h3>Date Range</h3>

                  <div>
                    <select>
                      <option>CUSTOM</option>
                      <option >COMPLETED</option>
                      <option>PENDING</option>
                      <option>FAILED</option>
                      <option >UNDER REVIEW</option>
                      <option>ON HOLD</option>
                    </select>
                  </div>

                  <div className="date-input">
                    <div className="date-field">
                      <span>From</span>
                      <input type="date" className="input-min" />
                    </div>
                    <div className="date-field">
                      <span>To</span>
                      <input type="date" className="input-max" />
                    </div>
                  </div>
                </div>
                <div className='Status'>
                  <h3>Status</h3>
                  <div className="selectoption">
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#3BB54A' }}>COMPLETED</label>
                    </div>
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#FEA82F' }}>PENDING</label>
                    </div>
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#FD575B' }}>FAILED</label>
                    </div>
                    <div className="label1">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        role="checkbox" />
                      <label style={{ color: '#0070BC' }}>UNDER REVIEW</label>
                    </div>
                  </div>
                </div>
                <div className="sender">
                  <h3>Add Senders</h3>
                  <div className="searchbar">
                    <i><IoSearch style={{ width: '30px', height: '30px', color: '#00000080' }} /></i>
                    <input type="search" placeholder="Search" onClick={openSenderModallist} />
                  </div>
                  <div className="sendername">
                    <img src={serndername}></img>
                    <img src={serndername}></img>
                  </div>
                </div>
                <div className="sender">
                  <h3>Add Receiver</h3>
                  <div className="searchbar">
                    <i><IoSearch style={{ width: '30px', height: '30px', color: '#00000080' }} /></i>
                    <input type="search" placeholder="Search" onClick={openSenderModallist} />
                  </div>
                  <div className="sendername">
                    <img src={serndername}></img>
                    <img src={serndername}></img>
                  </div>
                </div>
                <div className="modetransaction">
                  <h3>Mode of Transactions</h3>
                  <div className="selectoption1">
                    <div className="mode">
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label>Bank Transfer</label>
                      </div>
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label>Mobile Wallet</label>
                      </div>
                    </div>
                    <div className="mode">
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label >Cash Pickup</label>
                      </div>
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label>Credit Card</label>
                      </div>
                    </div>
                    <div className="mode">
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label >Cash Pickup</label>
                      </div>
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label>Credit Card</label>
                      </div>
                    </div>
                    <div className="mode">
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label >Cash Pickup</label>
                      </div>
                      <div className="label12">
                        <input
                          type="checkbox"
                        />
                        <label>Credit Card</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sender">
                  <h3>Currencies</h3>
                  <div className="searchbar">
                    <i><IoSearch style={{ width: '30px', height: '30px', color: '#00000080' }} /></i>
                    <input type="search" placeholder="Search" onClick={openCurrenciesModallist} />
                  </div>
                  <div className="sendername">
                    <img src={Currencies}></img>
                    <img src={Currencies}></img>
                    <img src={Currencies}></img>
                  </div>
                </div>
                <div className="datarange">
                  <h3>Sort By</h3>

                  <div>
                    <select>
                      <option>Select</option>
                      <option>Date</option>
                      <option >Amount</option>
                    </select>
                  </div>
                </div>
                <div className="datarange">
                  <h3>Order</h3>

                  <div className="order12">
                    <input type="search" placeholder="Search" onClick={openOrderModal} />
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

        {/* SenderModallist */}
        {isSenderModallist && (
          <SenderList onClose={closeSenderModallist}>
            <div className="senderlist">
              <div className="searchbarlist">
                <i><IoSearch style={{ width: '30px', height: '30px', color: '#00000080' }} /></i>
                <input type="search" placeholder="Search" />
              </div>
              <div className="senders2" onClick={closeSenderModallist}>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>   <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
                <div className="serders1">
                  <img src={senderprofile} alt="1"></img>
                  <span>Lorem Ipsum</span>
                </div>
              </div>
            </div>
          </SenderList>
        )}





        {/* CurrenciesrModallist */}
        {isCurrenciesModallist && (
          <SenderList onClose={closeCurrenciesModallist}>
            <div className="senderlist">
              <div className="searchbarlist">
                <i><IoSearch style={{ width: '30px', height: '30px', color: '#00000080' }} /></i>
                <input type="search" placeholder="Search" />
              </div>
              <div className="senders2" onClick={closeCurrenciesModallist}>
                <div className="serders1">
                  <img src={India} alt="1"></img>
                  <span>Indian Rupees ( ₹ INR )</span>
                </div>
                <div className="serders1">
                  <img src={Us} alt="1"></img>
                  <span>U.S Dollar ( $ USD )</span>
                </div>
                <div className="serders1">
                  <img src={British} alt="1"></img>
                  <span>British Pound ( £ USD )</span>
                </div>
                <div className="serders1">
                  <img src={India} alt="1"></img>
                  <span>Indian Rupees ( ₹ INR )</span>
                </div>
                <div className="serders1">
                  <img src={British} alt="1"></img>
                  <span>British Pound ( £ USD )</span>
                </div>
                <div className="serders1">
                  <img src={Us} alt="1"></img>
                  <span>U.S Dollar ( $ USD )</span>
                </div>
                <div className="serders1">
                  <img src={India} alt="1"></img>
                  <span>Indian Rupees ( ₹ INR )</span>
                </div>
              </div>
            </div>
          </SenderList>
        )}

        {isOrder && (
          <Order onClose={closeOrderModal}>
            <div className="senderlist">
              <div className="senders2" onClick={closeOrderModal}>
                <div className="serders1">
                  <img src={Ascending} alt="1"></img>
                  <span>Ascending</span>
                </div>
                <div className="serders1">
                  <img src={Descending} alt="1"></img>
                  <span>Descending</span>
                </div>
              </div>
            </div>
          </Order>
        )}




        {isRepostOpen && (
          <Repost onClose={closeRepostModal}>

            <div className="repostconatiner">
              <div className="repostheder">
                <div>
                  <h3>Generate Transactional Report</h3>
                </div>
                <div className="repostimg">
                  <Link to={'/reportSettings'}>
                    <img src={setting}></img>
                  </Link>
                  <img src={smallcross} onClick={closeRepostModal}></img>
                </div>
              </div>
              <div className="repostline">
                <hr />
              </div>
              <div className="switchbtn">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider1 round"></span>
                </label>
                <p>Match Customization Settings with my Filter</p>
              </div>
              <div className="repostselect">
                <div>
                  <span>Range</span>
                  <select>
                    <option>CUSTOM</option>
                    <option >WEEKLY</option>
                    <option>MONTHLY</option>
                    <option>MONTHLY</option>
                    <option >HALF-YEARLY ( 6 MONTHS )</option>
                    <option>YEARLY</option>
                  </select>
                </div>

                <div className="repost-date">
                  <div className="repost-field">
                    <span>From</span>
                    <input type="date" className="input-min" />
                  </div>
                  <div className="repost-field">
                    <span>To</span>
                    <input type="date" className="input-max" />
                  </div>
                </div>
              </div>
              <div className="repostStatus">
                <h3>Status</h3>
                <div className="selectoption11">
                  <div className="mode1">
                    <div className="label13">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#3BB54A' }}>COMPLETED</label>
                    </div>
                    <div className="label13">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#FEA82F' }}>PENDING</label>
                    </div>
                  </div>
                  <div className="mode1">
                    <div className="label13">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#FD575B' }}>FAILED</label>
                    </div>
                    <div className="label13">
                      <input
                        type="checkbox"
                      />
                      <label style={{ color: '#0070BC' }}>UNDER REVIEW</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="repostselect">
                <h3>Export As :</h3>
                <div>
                  <select>
                    <option>PDF</option>
                    <option >EXCEL SHEET</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="btn12">
              <button className="exportbtn" onClick={closeRepostModal}>EXPORT</button>
              <div className="cancelbtn1">
                <img src={arrowbtn}></img>
                <button className="cancelbtn" onClick={closeRepostModal}>Cancel</button>
              </div>
            </div>

          </Repost>
        )}


      </section>
    </>
  );
};

export default HOC(Transaction);
