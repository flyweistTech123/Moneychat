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
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";



const data = [
  {
    amount: "£500",
    id: "ABCD12345",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
  {
    amount: " £500",
    id: "ABCD12346",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: " £500",
    id: "ABCD12349",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: "£500",
    id: "ABCD12345",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
  {
    amount: " £500",
    id: "ABCD12346",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
    status: "complete",
  },
];

const Transaction = () => {
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

  return (
    <>
      <FullScreenLoader show={show} handleClose={handleClose} />
      <section className="pages">
        <div className="Heading_all">
          <h5>Transactions</h5>
          <div className="search">
            <img src="./Image/15.png" alt="" onClick={() => handleShow()} />
            <div>
            <i><IoSearch /></i>
              <input type="search" placeholder="Search Transaction" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter">
              <img src="./Image/16.png" alt="" />
              <span>FILTERS</span>
            </button>
            <button className="report">
              <img src="./Image/17.png" alt="" />
              <span>REPORT</span>
            </button>
          </div>
        </div>

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
                <td>
                  <span className="amount_td">
                    <span> {i.amount} </span>
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
                  {i.date} <span style={{ color: "#0070BC" }}> {i.time} </span>
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
                  {i.status ? (
                    <span className="status complete">COMPLETED</span>
                  ) : (
                    <select>
                      <option>Select Status</option>
                      <option className="complete">COMPLETED</option>
                      <option className="pending">PENDING</option>
                      <option className="failed">FAILED</option>
                      <option className="under_review">UNDER REVIEW</option>
                      <option className="onHold">ON HOLD</option>
                    </select>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default HOC(Transaction);
