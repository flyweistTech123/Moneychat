import React, { useState } from 'react'
import HOC from '../../layout/HOC'
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import file from '../../Images/reportfile.png'
import change from '../../Images/change.png'
import './ReportSettings.css'
import { IoSearch } from "react-icons/io5";
import profile from '../../Images/profile.png'
import cross from '../../Images/crosssetting.png'
import searchicon from '../../Images/searchicon.png'
import plus from '../../Images/plusreport.png'
import senderprofile from '../../Images/profilesender.png'
import SenderList from '../../Component/Modals/FilterModals/SenderList';


const ReportSettings = () => {
  const [isSenderModallist, setSenderModallist] = useState(false);
  const openSenderModallist = () => {
    setSenderModallist(true);
  }

  const closeSenderModallist = () => {
    setSenderModallist(false);
  }
  const navigate = useNavigate()
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
};
  return (
    <>
      <section className='pages'>
      <h5 className="head123head"><span  className="head123head1" onClick={() => navigate('/setting')}>Settings<IoIosArrowForward style={{ width: '25px' }} /></span>Report Settings</h5>
        <div className='Report-container'>
          <div className='Report-content'>
            <span>MANUAL REPORT GENERATION</span>
            <div className="reportlocation">
              <label>Export Location</label>
              <div className="reportlocation-datials">
                <img src={file} alt="" />
                <input type="text" className="input-min" placeholder="Windows \ D: \My Files \ My Folder \" />
                <img src={change} alt=""  onClick={triggerFileInput} />
                <input type="file" id="fileInput" style={{ display: 'none' }} />
              </div>
            </div>

            <div className='automaticreport'>
              <span>AUTOMATIC REPORT GENERATION</span>
              <p>Change & Manage your scheduling for Automatic Report Generation</p>
            </div>

            <div className='reportselect'>
              <label>Automatic Reports Schedule</label>
              <div>
                <select>
                  <option>Daily</option>
                  <option >Weekly</option>
                  <option >Monthly</option>
                  <option >Half-Yearly</option>
                  <option >Yearly</option>
                </select>
              </div>
            </div>

            <div className='sendreport'>
              <label>Send Reports to :</label>
              <div className="report-searchbox">
                <i>
                  <img src={searchicon} alt="" />
                </i>
                <input type="search" placeholder="Search" />
              </div>

              <div className='reportprofilecards'>
                <div className='report-profile-card'>
                  <img src={profile} alt="" />
                  <p>Lorem Ipsum</p>
                  <img src={cross} alt="" />
                </div>
                <div className='report-profile-card'>
                  <img src={profile} alt="" />
                  <p>Lorem Ipsum</p>
                  <img src={cross} alt="" />
                </div>
                <div className='report-profile-card'>
                  <img src={profile} alt="" />
                  <p>Lorem Ipsum</p>
                  <img src={cross} alt="" />
                </div>
              </div>
              <div className='reportprofilecards'>
                <div className='report-profile-card'>
                  <img src={profile} alt="" />
                  <p>Lorem Ipsum</p>
                  <img src={cross} alt="" />
                </div>
                <div className='report-profile-card'>
                  <img src={profile} alt="" />
                  <p>Lorem Ipsum</p>
                  <img src={cross} alt="" />
                </div>
                <div className='AddReport'  onClick={openSenderModallist}>
                  <img src={plus} alt="" />
                  <p>ADD</p>
                </div>
              </div>
            </div>

            <div className='reportTrigers'>
              <h6>Add Trigers</h6>
              <p>Add triggers to notify & automatically send the report whenever following conditions are met</p>
              <div className="switchbtn1">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider1 round"></span>
                </label>
                <div>
                <h5>Maximum Failed Transactions</h5>
                <input type="text" placeholder='Add Value ( e.g 1,00,000 )' />
                </div>
              </div>
              <div className="switchbtn1">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider1 round"></span>
                </label>
                <div>
                <h5>Maximum Transaction Value Crossed</h5>
                <input type="text" placeholder='Add Value ( e.g 1,00,000 )' />
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </section>
    </>
  )
}

export default HOC(ReportSettings)