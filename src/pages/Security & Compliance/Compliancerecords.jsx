/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './Compliancerecords.css'
import upload from '../../Images/upload.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dot from '../../Images/dot.png'
import Repost from "../../Component/Modals/TransactionRepost/Repost";
import smallcross from '../../Images/smallcross.png'
import { IoIosArrowForward } from "react-icons/io";
import arrowbtn from '../../Images/arrowbtn.png'
import { useState } from "react";
import text from '../../Images/text.png'
import uplbtn from '../../Images/uploadbtn.png'
import { Threeline3 } from "../../Component/TransactionModal";
import searchicon from '../../Images/searchicon.png'




const data = [
  {
    id: "012341",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    id: "012342",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    id: "012343",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    id: "012344",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    id: "012345",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
];

const Compliancerecords = () => {
  const [isRepostOpen, setRepostOpen] = useState(false)
  const [modalStates2, setModalStates2] = useState({});
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


  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };
  const navigate = useNavigate()
  return (
    <>
      <section className="pages">
      <h5 className="head123head"><span  className="head123head1" onClick={() => navigate('/gallery')}>Security & Compliance<IoIosArrowForward style={{ width: '25px' }} /></span>Compliance Records</h5>
        <div className="Headingall">
          <div className="search">
            <div>
            <i> <img src={searchicon} alt="" /></i>
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter">
              <img src="./Image/16.png" alt="" />
              <span>FILTERS</span>
            </button>
            <button className="report" onClick={openRepostModal}>
              <img src={upload} alt="" />
              <span>UPLOAD</span>
            </button>
          </div>
        </div>
        <div className="compliancetable">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <span style={{ color: '#000000' }}> {i.title} </span>
                  </td>
                  <td>
                    <p>{i.description}</p>
                  </td>
                  <td>
                    <span>{i.category}</span>
                  </td>
                  <td>
                    <span>{i.status}</span>
                  </td>
                  <td>
                    <span className="cursor_class">
                      <span onClick={() => handleSenderModal(i.id)}>
                        <img src={dot} alt="" />
                      </span>
                      <Threeline3
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


        {isRepostOpen && (
          <Repost onClose={closeRepostModal}>

            <div className="repostconatiner">
              <div className="repostheder">
                <div>
                  <h3>Upload Document / Resource</h3>
                </div>
                <div className="repostimg">
                  {/* <img src={setting}></img> */}
                  <img src={smallcross} onClick={closeRepostModal}></img>
                </div>
              </div>
              <div className="repostline">
                <hr />
              </div>
              <div className="sender">
                <div className="searchbar" style={{ width: '660px' }}>
                  <i><img style={{ width: '30px', height: '30px', color: '#00000080' }} src={text}></img></i>
                  <input type="text" placeholder="Add Title" />
                </div>
              </div>
              <div className="repostselect">
                <div>
                  <select>
                    <option>Select Category</option>
                    <option >WEEKLY</option>
                    <option>MONTHLY</option>
                    <option>MONTHLY</option>
                    <option >HALF-YEARLY ( 6 MONTHS )</option>
                    <option>YEARLY</option>
                  </select>
                </div>

              </div>

              <div className="upload-box" onClick={triggerFileInput}>
                <input type="file" id="fileInput" style={{ display: 'none' }} />
                <div className="icon"><img src={uplbtn} alt="" /></div>
                <div>
                  <p>CLICK TO UPLOAD</p>
                  <span className="text">*Docx , Pdf , Txt etc.</span>
                </div>

              </div>

              <div className="textarea1">
                <textarea rows="6" cols="30" placeholder="Add Description..............."></textarea>
              </div>
            </div>

            <div className="btn12">
              <button className="exportbtn" onClick={closeRepostModal}>SUBMIT</button>
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

export default HOC(Compliancerecords)