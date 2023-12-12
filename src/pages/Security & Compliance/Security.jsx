import React from 'react'
import HOC from '../../layout/HOC';
import './Security.css'
import security from '../../Images/security.png'
import security1 from '../../Images/security1.png'
import security2 from '../../Images/security2.png'

const Security = () => {
  return (
    <>
    <section className='pages'>
    <div className="Heading_all">
          <h5>Security & Compliance</h5>
        </div>
        <div className='card2'>
              <div className='intakecards1'>
                <div className="small-card1">
                  <img src={security} alt="Icon" className="card-icon1" />
                  <p>Role-Based Access Control</p>
                  <span>Manage Permissons & Details of your Employees</span>
                </div>
                <div className="small-card1">
                  <img src={security2} alt="Icon" className="card-icon1" />
                  <p>Flagged Transactions</p>
                  <span>View & Manage all your Flagged Transactions</span>
                </div>
                <div className="small-card1">
                  <img src={security1} alt="Icon" className="card-icon1" />
                  <p>Compliance Records</p>
                  <span>Store & Manage all your Comliance Records</span>
                </div>
              </div>
            </div>
    </section>
    </>
  )
}

export default HOC(Security)