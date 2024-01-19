import React from 'react'
import HOC from '../../layout/HOC'
import './Setting.css'
import settingbell from '../../Images/settingbell.png'
import settignchart from '../../Images/settingchart.png'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const Setting = () => {
  return (
    <>
      <section className='pages'>
        <div className="Heading_all">
          <h5>Settings</h5>
        </div>
        <div className='setting-conatiner'>
          <div className='settingcard'>
            <Link to={'/notification'}>
              <div className="small-setting-card">
                <div className='small-setting-setting'>
                  <img src={settingbell} alt="Icon" className="setting-icon" />
                  <span>Notifications & Alerts</span>
                </div>
                <IoIosArrowForward className="setting-icon1" />
              </div>
            </Link>
            <Link to={'/reportSettings'}>
              <div className="small-setting-card">
                <div className='small-setting-setting'>
                  <img src={settignchart} alt="Icon" className="setting-icon" />
                  <span>Report Settings</span>
                </div>
                <div className='settg'><IoIosArrowForward className="setting-icon1" /></div>
              </div>
            </Link>
            <Link to={''}>
              <div className="small-setting-card">
                <div className='small-setting-setting'>
                  <img src={settingbell} alt="Icon" className="setting-icon" />
                  <span>Communications</span>
                </div>
                <div><IoIosArrowForward className="setting-icon1" /></div>
              </div>
            </Link>
            <Link to={''}>
              <div className="small-setting-card">
                <div className='small-setting-setting'>
                  <img src={settingbell} alt="Icon" className="setting-icon" />
                  <span>Notifications & Alerts</span>
                </div>
                <div><IoIosArrowForward className="setting-icon1" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HOC(Setting)