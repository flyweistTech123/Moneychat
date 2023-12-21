import React from 'react'
import HOC from '../../layout/HOC'
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import './NotificationsAlerts.css'


const NotificationsAlerts = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='pages'>
        <h5 style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><span onClick={() => navigate('/setting')} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>Settings  <IoIosArrowForward style={{ width: '25px' }} /></span>  Notifications & Alerts</h5>

        <div className='Notificatoncontainer'>
          <div className='notification-content'>
            <span>NOTIFICATION PREFERENCES</span>
            <p><span>Mark</span> & <span>Tick</span> all the notifications you want to Receive</p>
            <div className="Notificationselector">
              <div className='input11'>
                <input
                  type="checkbox"
                />
                <label>Pending transaction for more than 24 Hrs</label>
              </div>
              <div className='input11' >
                <input
                  type="checkbox"
                />
                <label>When there is any Failed Transaction</label>
              </div>
            </div>
            <div className='downnotifiaction'>
            <span>RECEIVE NOTIFICATIONS ON</span>
              <div className="Notificationselector">
                <div className='input11'>
                  <input
                    type="checkbox"
                  />
                  <label style={{color:'#000000'}}>SMS</label>
                </div>
                <div className='input11'>
                  <input
                    type="checkbox"
                  />
                  <label style={{color:'#000000'}}>Email</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HOC(NotificationsAlerts)