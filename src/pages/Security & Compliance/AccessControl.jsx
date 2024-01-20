/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './AccessControl.css'
import plus from '../../Images/plu.png'
import profile from '../../Images/profile.png'
import staff from '../../Images/staf.png'
import { MdOutlineHistory } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";
import TransactionsFilter from "../../Component/Modals/FilterModals/TransactionsFilter";
import { useState } from "react";
import Repost from "../../Component/Modals/TransactionRepost/Repost";
import smallcross from '../../Images/smallcross.png'
import arrowbtn from '../../Images/arrowbtn.png'
import profileimg from '../../Images/profilerepost.png'
import { Threeline1, Threeline7 } from "../../Component/TransactionModal";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";






const data = [
  {
    id: "012341",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012342",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012343",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012344",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
  },
];





const AccessControl = () => {
  const [isfilterModalOpen, setFilterModaOpen] = useState(false);
  const [isRepostOpen, setRepostOpen] = useState(false)
  const [modalStates2, setModalStates2] = useState({});
  const [modalStates, setModalStates] = useState({});
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

  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }


  const navigate = useNavigate()
  return (
    <>
      <section className="pages">
      <h5 className="head123head"><span  className="head123head1" onClick={() => navigate('/gallery')}>Security & Compliance<IoIosArrowForward style={{ width: '25px' }} /></span>Role-Based Access Control</h5>
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
              <span >FILTERS</span>
            </button>
            <button className="report" onClick={openRepostModal}>
              <img src={plus} alt="" />
              <span>ADD EMPLOYEE</span>
            </button>
          </div>
        </div>
        <div className="employeetable">
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
                    <span> {i.id} </span>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={i.image} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={i.image1} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.designation}</span>
                    </div>
                  </td>
                  <td>
                    <div>{i.lastLoggedin}</div>
                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                      <MdOutlineHistory style={{ marginRight: '4px', marginLeft: '50px' }}  /> {i.time}
                    </p>
                  </td>
                  <td>
                    <span className="cursor_class">
                      <span onClick={() => handleModalOpen(i.id)}>
                        <div className="Permissions61">
                          <h6>All Accessible</h6>
                          <FaAngleDown className="Permissions62" />
                        </div>
                      </span>
                      <Threeline7
                        isOpen={modalStates[i.id] || false}
                        onClose={() => handleModalClose(i.id)}
                      />
                    </span>{" "}
                  </td>
                  <td>
                    <span className="cursor_class">
                      <span onClick={() => handleSenderModal(i.id)}>
                      <img src={lines} alt="" />
                      </span>
                      <Threeline1
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
                <div className='Designation'>
                  <h3>Designation</h3>
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
                <div className='Designation'>
                  <h3>Permissions</h3>
                  <div className="selectdesignation">
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label>Super-Admin</label>
                    </div>
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label >Admin</label>
                    </div>
                    <div className="label1">
                      <input
                        type="checkbox"
                      />
                      <label>Manager</label>
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


        {/* CurrenciesrModallist */}
        {isRepostOpen && (
          <Repost onClose={closeRepostModal}>

            <div className="repostconatiner">
              <div className="repostheder">
                <div>
                  <h3>Add Employee</h3>
                </div>
                <div className="repostimg">
                  <img src={smallcross} onClick={closeRepostModal}></img>
                </div>
              </div>
              <div className="repostline">
                <hr />
              </div>

              <div className="profile-image122">
                <img src={profileimg} alt="" />
              </div>
              <div className="employdatials">
                <div className="employ-datials">
                  <span>Full Name</span>
                  <input type="text" className="input-min" placeholder="Enter Lorem Ipsum" />
                </div>
                <div className="employ-datials">
                  <span>Email</span>
                  <input type="text" className="input-max" placeholder="Enter Lorem Ipsum" />
                </div>
                <div className="employ-datials">
                  <span>Contact Number</span>
                  <input type="text" className="input-max" placeholder="Enter Lorem Ipsum" />
                </div>
              </div>

              <div className="permission">
                <h3>Permission</h3>
                <div className="switchbtn">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider1 round"></span>
                  </label>
                  <p>Super-Admin</p>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider1 round"></span>
                  </label>
                  <p>Lorem Ipsum</p>
                </div>
                <div className="switchbtn">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider1 round"></span>
                  </label>
                  <p>Manager</p>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider1 round"></span>
                  </label>
                  <p>Admin</p>
                </div>
              </div>
            </div>

            <div className="btn12">
              <button className="exportbtn" onClick={closeRepostModal}>SAVE & ADD</button>
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

export default HOC(AccessControl)