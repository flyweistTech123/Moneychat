/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './flaggedtransactions.css'
import agent from '../../Images/agent.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";
import ibutton from '../../Images/i.png'
import TransactionsFilter from "../../Component/Modals/FilterModals/TransactionsFilter";
import { useState } from "react";
import {  Threeline2, TransactionModal } from "../../Component/TransactionModal";
import CopyText from "../../Component/CopyText";





const data = [
  {
    amount: "£2000",
    id: "ABCD12341",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby: 'Agent',
    image: agent,
    risk: '80%'
  },
  {
    amount: "£2000",
    id: "ABCD12342",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby: 'Agent',
    image: agent,
    risk: '80%'
  },
  {
    amount: "£2000",
    id: "ABCD12343",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby: 'Agent',
    image: agent,
    risk: '80%'
  },
  {
    amount: "£2000",
    id: "ABCD12344",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby: 'Agent',
    image: agent,
    risk: '80%'
  },
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby: 'Agent',
    image: agent,
    risk: '80%'
  },
];

const Flaggedtransactions = () => {
  const [isfilterModalOpen, setFilterModaOpen] = useState(false);
  const [modalStates2, setModalStates2] = useState({});
  const [modalStates, setModalStates] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
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
        <h5><span onClick={() => navigate('/gallery')}>Security & Compliance</span> / Flagged Transactions</h5>
        <div className="Headingall">
          <div className="search">
            <div>
              <i><IoSearch /></i>
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter" onClick={openFilterModal}>
              <img src="./Image/16.png" alt="" />
              <span  >FILTERS</span>
            </button>
          </div>
        </div>
        <div className="Flaggedtable">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Ref. ID</th>
                <th>Date of Transaction</th>
                <th>Flagged On</th>
                <th>Flagged By</th>
                <th>Risk</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <span className="amount_td">
                      <span style={{ fontSize: '25px', color: '#000000' }}> {i.amount} </span>
                      <img
                        src="./Image/18.png"
                        alt=""
                        onClick={() => handleModalOpen(i.id)}
                      />
                       <TransactionModal
                        isOpen={modalStates[i.id] || false}
                        onClose={() => handleModalClose(i.id)}
                      />
                    </span>
                  </td>
                  <td
                    onMouseEnter={() => setHoveredId(i.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {hoveredId === i.id ? <CopyText text={i.id} /> : i.id}
                  </td>
                  <td>
                    <div>{i.dateoftransaction}</div>
                    <p>
                      {i.time}
                    </p>
                  </td>
                  <td>
                    <div>{i.flaggedon}</div>
                    <p style={{ margin: 0, color: '#FD575B' }}>
                      {i.time}
                    </p>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={i.image} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.flaggedby}</span>
                    </div>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={ibutton} alt="Profile" style={{ marginRight: "8px" }} />
                      <span style={{ color: "#FC0005" }}>{i.risk}</span>
                    </div>
                  </td>
                  <td>
                    <span className="cursor_class">
                      <span onClick={() => handleSenderModal(i.id)}>
                        <img src={lines} alt="" />
                      </span>
                      <Threeline2
                        isOpen={modalStates2[i.id] || false}
                        onClose={() => handleSenderModalClose(i.id)}
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

                <div className="rangebox">
                  <h3>Risk</h3>
                  <div className="slider">
                    <div className="progress" style={{ left: `${(minPrice / 10000) * 100}%`, right: `${100 - (maxPrice / 10000) * 100}%`, background: '#FD575B' }}></div>
                  </div>
                  <div className="range-input12">
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

                <div className="datarange">
                  <h3 style={{ marginBottom: '20px' }}>Date of Transactions</h3>

                  <div>
                    <span>Range</span>
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
                <div className="datarange">
                  <h3 style={{ marginBottom: '20px' }}>Flagged On</h3>

                  <div>
                    <span>Range</span>
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
                <div className='Designation'>
                  <h3 >Date of Transactions</h3>
                  <div className="selectdesignation">
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label>Staff Member</label>
                    </div>
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label >Manager</label>
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
                  <h3>Order</h3>

                  <div>
                    <select>
                      <option>Select</option>
                      <option >Ascending</option>
                      <option >Descending</option>
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

export default HOC(Flaggedtransactions)