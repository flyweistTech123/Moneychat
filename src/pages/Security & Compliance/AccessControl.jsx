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
import './AccessControl.css'
import plus from '../../Images/plu.png'



const data = [
    {
      amount: "012345",
      id: "Lorem Ipsum",
      date: "Staff Member",
      time: " (6:30 AM)",
      sender: "HH : MM ( DD/MM )",
      receiver: "HH : MM ( DD/MM )",
      status: "complete",
    },
    {
      amount: "012345",
      id: "Lorem Ipsum",
      date: "Staff Member",
      time: " (6:30 AM)",
      sender: "HH : MM ( DD/MM )",
      receiver: "Lorem Ipsum",
    },
    {
      amount: "012345",
      id: "Lorem Ipsum",
      date: "Staff Member",
      time: " (6:30 AM)",
      sender: "HH : MM ( DD/MM )",
      receiver: "Lorem Ipsum",
    },
    {
      amount: "012345",
      id: "Lorem Ipsum",
      date: "Staff Member",
      time: "",
      sender: "HH : MM ( DD/MM )",
      receiver: "Lorem Ipsum",
      status: "complete",
    },
    {
      amount: "012345",
      id: "Lorem Ipsum",
      date: "Staff Member",
      time: "",
      sender: "HH : MM ( DD/MM )",
      receiver: "Lorem Ipsum",
      status: "complete",
    },
  ];

const AccessControl = () => {
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
        <section className="pages">
        <h5><span>Security & Compliance</span> / Role-Based Access Control</h5>
          <div className="Headingall">
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
              <button className="report">
                <img src={plus} alt="" />
                <span>ADD EMPLOYEE</span>
              </button>
            </div>
          </div>
  
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Last Logged In</th>
                <th>Permissions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <span className="amount_td">
                      <span> {i.amount} </span>
                      {/* <img
                        src="./Image/18.png"
                        alt=""
                        onClick={() => handleModalOpen(i.id)}
                      /> */}
                      {/* <TransactionModal
                        isOpen={modalStates[i.id] || false}
                        onClose={() => handleModalClose(i.id)}
                      /> */}
                    </span>
                  </td>
                  <td
                    // onMouseEnter={() => setHoveredId(i.id)}
                    // onMouseLeave={() => setHoveredId(null)}
                  >
                    { i.id}
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
              <i className="fa-solid fa-chevron-left"></i>PREVIOUS
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>
              NEXT <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>
      </>
    );
  };

export default HOC(AccessControl)