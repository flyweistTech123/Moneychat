import React from 'react'
import HOC from '../../layout/HOC';
import './CommunicationTools.css'
import email from '../../Images/email.png'
import msg from '../../Images/msg.png'
import { Link } from 'react-router-dom';
import call from '../../Images/call.png'

const CommunicationTools = () => {
    return (
        <>
            <section className='pages'>
                <div className="Heading_all">
                    <h5>Communication Tools</h5>
                </div>
                <div className='card3'>
                    <div className='intakecards2'>
                        <Link to={'/role-basedaccesscontrol'}>
                            <div className="small-card2">
                                <img src={email} alt="Icon" className="card-icon2" />
                                <p>Email Communication</p>
                                <span>Use Email Platforms such as Gmail, Outlook, Zoho for Regular Communication</span>
                            </div>
                        </Link>
                        <Link to={'/flaggedtransactions'}>
                            <div className="small-card2">
                                <img src={msg} alt="Icon" className="card-icon2" />
                                <p>Instant Messaging through Moneychat</p>
                                <span>Use Moneychat chat feature for real-time chat with your Moneychat Team</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="Headingall6">
                    <img src={call} alt="" />
                    <h5>Contact Us</h5>
                </div>

                <div className='contactcontainer'>
                    <div className='contact'>
                        <span><p>Compliance :</p> +44 20000000000</span>
                        <span><p>Onboarding :</p>+44 20000000000</span>
                    </div>
                    <div className='contact'>
                        <span><p>Customer Care  :</p> +44 20000000000</span>
                        <span><p>General Enquiry :</p>+44 20000000000</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HOC(CommunicationTools)