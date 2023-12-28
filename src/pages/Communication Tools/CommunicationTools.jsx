import React, { useState } from 'react'
import HOC from '../../layout/HOC';
import './CommunicationTools.css'
import email from '../../Images/email.png'
import msg from '../../Images/msg.png'
import searchicon from '../../Images/searchicon.png'
import call from '../../Images/call.png'
import EmailCommunicarion from './EmailCommunication';
import Chat from './Chat'
import fileupload from '../../Images/fileupload.png'
import emoji from '../../Images/emoji.png'
import dust from '../../Images/deletethree.png'
import senderprofile from '../../Images/profilechat.png'
import EmojiPicker from 'emoji-picker-react';
import online from '../../Images/online.png'
import threedot from '../../Images/threedot.png'
import emoji1 from '../../Images/emoji1.png'
import plus from '../../Images/add.png'
import mike from '../../Images/mike.png'

const CommunicationTools = () => {
    const [isEmailCommunicationOpen, setEmailCommunicationModalOpen] = useState(false);
    const [isChatModalOpen, setChatModalOpen] = useState(false);

    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);


    const openEmailCommunicationModalOpen = () => {
        setEmailCommunicationModalOpen(true);
    };

    const closeEmailCommunicationModalModal = () => {
        setEmailCommunicationModalOpen(false);
    };

    const openChatModalOpen = () => {
        setChatModalOpen(true);
    };

    const closeChatModalModal = () => {
        setChatModalOpen(false);
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };
    const toggleEmojiPicker = () => {
        setIsEmojiPickerOpen(!isEmojiPickerOpen);
    };
    return (
        <>
            <section className='pages'>
                <div className="Heading_all">
                    <h5>Communication Tools</h5>
                </div>
                <div className='card3'>
                    <div className='intakecards2'>
                        <div className="small-card2" onClick={openEmailCommunicationModalOpen}>
                            <img src={email} alt="Icon" className="card-icon2" />
                            <p>Email Communication</p>
                            <span>Use Email Platforms such as Gmail, Outlook, Zoho for Regular Communication</span>
                        </div>


                        <div className="small-card2" onClick={openChatModalOpen}>
                            <img src={msg} alt="Icon" className="card-icon2" />
                            <p>Instant Messaging through Moneychat</p>
                            <span>Use Moneychat chat feature for real-time chat with your Moneychat Team</span>
                        </div>
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
                {/* Notification Modal */}
                {isEmailCommunicationOpen && (
                    <EmailCommunicarion onClose={closeEmailCommunicationModalModal} isDocumentationModalOpen={isEmailCommunicationOpen}>
                        <div className='Email-communication-header'>
                            <h2>Email Communication</h2>
                            <div className='email-line'><hr /></div>
                        </div>

                        <div className='Email-container-div'>
                            <div className='Email-templete'>
                                <div className='Email-content'>
                                    <span>Select Template</span>
                                    <div className="template-searchbox">
                                        <i>
                                            <img src={searchicon} alt="" />
                                        </i>
                                        <input type="search" placeholder="Search" />
                                    </div>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                    <h6>Template 1</h6>
                                </div>
                            </div>
                            <div className='Email-input-box'>
                                <div className="Email-input-area">
                                    <select name="security-question" id="security-question">
                                        <option value="1">Select Platform</option>
                                        <option value="2">Select Platform</option>
                                        <option value="3">Select Platform</option>
                                    </select>
                                </div>
                                <div className="Email-input-area">
                                    <input type="text" placeholder="Recipients :" />
                                </div>
                                <div className="Email-input-area">
                                    <input type="text" placeholder="Add Subject" />
                                </div>
                                <div className="Email_textarea12">
                                    <div className="custom-textarea">
                                        <div className='uploades-container'>
                                        <div className='Email-upload1'>
                                            <img src={fileupload} alt="Your Image" onClick={triggerFileInput} />
                                            <h6 onClick={triggerFileInput}>ADD MEDIA</h6>
                                        </div>
                                        <div className='Email-upload2'>
                                            <img src={emoji} alt="Your Image" />
                                            <h6 onClick={toggleEmojiPicker}>INSERT EMOJI</h6>
                                            {isEmojiPickerOpen && (
                                                <div>
                                                    <EmojiPicker />
                                                </div>
                                            )}
                                        </div>
                                        <div className='Email-upload3'>
                                            <img src={dust} alt="Your Image" />
                                            <h6>DISCARD</h6>
                                        </div>
                                        <div className='Email-upload4'>
                                            <button className="Email-send-btn">SEND</button>
                                        </div>
                                        </div>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                                        <textarea rows="10" cols="30" placeholder="Type Here.........."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EmailCommunicarion>
                )}


                {isChatModalOpen && (
                    <Chat onClose={closeChatModalModal} isDocumentationModalOpen={isChatModalOpen}>
                        <div className='Chat-communication-header'>
                            <h2>Email Communication</h2>
                            <div className='chat-line'><hr /></div>
                        </div>

                        <div className='Chat-container-div'>
                            <div className='Chat-templete'>
                                <div className='Chat-content'>
                                    <span>Select Member</span>
                                    <div className="template-searchbox">
                                        <i>
                                            <img src={searchicon} alt="" />
                                        </i>
                                        <input type="search" placeholder="Search" />
                                    </div>
                                    <div className="senders2" onClick={closeChatModalModal}>
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
                            </div>
                            <div className='Chat-chat-box'>
                                <div className='profile-status'>
                                    <div className='profile-status12'>
                                    <img src={senderprofile} alt=""  style={{width:'50px', height:'50px'}}/>
                                    <span>Lorem Ipsum</span >
                                    <img src={online}alt="" style={{width:'171px', height:'21px'}} />
                                    </div>
                                    <img src= {threedot}alt="" style={{width:'30px', height:'30px', marginLeft:'100px' }} />
                                </div>

                                <div className='today'>
                                    <div className='today-1'>
                                    <h6>TODAY</h6>
                                    </div>
                                </div>

                                <div className='recevive-msg'>
                                    <h6>Lorem Ipsum ssefsfesfhh</h6>
                                    <h6>2:30 AM</h6>
                                </div>
                                <div className='sender-msg'>
                                    <h6>Lorem Ipsum ssefsfesfhh</h6>
                                    <h6>2:30 AM</h6>
                                </div>
                                <div className='sender-msg1'>
                                    <h6>Lorem Ipsum ssefsfesfhh</h6>
                                    <h6>2:30 AM</h6>
                                </div>

                                <div className='send_msg_container'>

                                <div className='send-msg-emoji'>
                                    <img src={emoji1} alt=""/>
                                    <img src={plus} alt="" />
                                    <div className='send-input-btn'>
                                        send
                                    </div>
                                    <img src={mike} alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </Chat>
                )}
            </section>
        </>
    )
}

export default HOC(CommunicationTools)