import React, { useState } from 'react'
import HOC from '../../layout/HOC'
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import './AccountDetails.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Id from '../../Images/accId.png'
import password from '../../Images/accpassword.png'
import question from '../../Images/accquesstion.png'
import call from '../../Images/acccall.png'
import email from '../../Images/accemail.png'
import doc from '../../Images/accdoc.png'
import info from '../../Images/redinfomodal.png'
import upload from '../../Images/accupload.png'
import bussinesname from '../../Images/bussiness.png'
import industry from '../../Images/bussindustry.png'
import visa from '../../Images/visa.png'
import redplus from '../../Images/redplus.png'


const AccountDetails = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <>
            <section className='pages'>
                <div className='Heading_all_all'>
                <h5>Account Details</h5>
                <div className='Heading_all_active'>
                    <h6>STATUS  -  </h6>
                    <div className='Heading_all_green'></div>
                    <h5>ACTIVE</h5>
                </div>
                </div>
                <div className='Acccount-details-PROFILE-INFORMATION'>
                    <div className='account-container'>
                        <div className='profile-infomation'>
                            <span>PROFILE INFORMATION</span>
                            <div className="Profile-inputs">
                                <i>
                                    <img src={Id} alt="" />
                                </i>
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="Profile-inputs">
                                <i>
                                    <img src={password} alt="" />
                                </i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="Profile-inputs">
                                <i>
                                    <img src={question} alt="" />
                                </i>
                                <select name="security-question" id="security-question">
                                    <option value="1">Security Question</option>
                                    <option value="2">Security Question</option>
                                    <option value="3">Security Question</option>
                                </select>
                            </div>
                            <div className="Profile-inputs">
                                <input type="text" placeholder="Commission Structure" />
                            </div>
                            <div className='acc-contact'>
                                <label htmlFor="">Contacts</label>
                                <div className="Profile-inputs">
                                    <i>
                                        <img src={call} alt="" />
                                    </i>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={setValue} />
                                </div>
                                <div className="Profile-inputs">
                                    <i>
                                        <img src={email} alt="" />
                                    </i>
                                    <input type="email" placeholder="loremipsum@gmail.com" />
                                </div>
                            </div>

                            <div className='profile-documents'>
                                <label htmlFor="">My Documents</label>
                                <div className='missing-document'>
                                    <img src={info} alt="" />
                                    <p><span style={{ color: '#FC0005', fontWeight: '600', fontSize: '18px' }}>3 Documents are missing.</span> Please <span style={{ color: '#000000', fontWeight: '600', fontSize: '18px' }}>Upload</span> the Remaining Documents!</p>
                                </div>


                                <div className='bussiness-registration'>
                                    <div className='missing-document'>
                                        <label>Business Registration & Licensing</label>
                                        <img src={info} alt="" />
                                        <p style={{ color: '#FC0005', fontWeight: '600', fontSize: '18px' }}>Missing</p>
                                    </div>

                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Business License" />
                                    </div>
                                    <div className='btnuploaddoc'>
                                        <div className="Profile-inputs" style={{ border: '1px solid #FC0005' }}>
                                            <i>
                                                <img src={info} alt="" />
                                            </i>
                                            <input type="text" placeholder="Certificate of Incorporation" />
                                        </div>
                                        <button className='docupload1' onClick={triggerFileInput}><img src={upload} alt="" />UPLOAD</button>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Identity Verification</label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Owner / Operator ID" />
                                    </div>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Proof of Address" />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <div className='missing-document'>
                                        <label>Financial Information</label>
                                        <img src={info} alt="" />
                                        <p style={{ color: '#FC0005', fontWeight: '600', fontSize: '18px' }}>Missing</p>
                                    </div>
                                    <div className='btnuploaddoc'>
                                        <div className="Profile-inputs" style={{ border: '1px solid #FC0005' }}>
                                            <i>
                                                <img src={info} alt="" />
                                            </i>
                                            <input type="text" placeholder="Financial Statements" />
                                        </div>
                                        <button className='docupload1' onClick={triggerFileInput} ><img src={upload} alt="" />UPLOAD</button>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Compliance with Anti-Money Laundering Laws ( AML ) Documents</label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="AML Policy" />
                                    </div>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="AML Training Periods" />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Know your Customer ( KYC ) Procedures Document </label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="KYC Policy" />
                                    </div>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Sample KYC Records" />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Data Protection & Privacy Document</label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Data Protection Policy" />
                                    </div>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Data Processing Agreements" />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Operational & Compliance Audits Document</label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Audit Reports" />
                                    </div>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Compliance Certifications" />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <div className='missing-document'>
                                        <label>Financial Insurance Document</label>
                                        <img src={info} alt="" />
                                        <p style={{ color: '#FC0005', fontWeight: '600', fontSize: '18px' }}>Missing</p>
                                    </div>
                                    <div className='btnuploaddoc'>
                                        <div className="Profile-inputs" style={{ border: '1px solid #FC0005' }}>
                                            <i>
                                                <img src={info} alt="" />
                                            </i>
                                            <input type="text" placeholder="Liability Insurance" />
                                        </div>
                                        <button className='docupload1' onClick={triggerFileInput}><img src={upload} alt="" />UPLOAD</button>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                                    </div>
                                </div>
                                <div className='bussiness-registration'>
                                    <label>Reference Document</label>
                                    <div className="Profile-inputs">
                                        <i>
                                            <img src={doc} alt="" />
                                        </i>
                                        <input type="text" placeholder="Business References" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='legal'>Legal & Compliance Documents</p>
                </div>

                <div className='Acccount-details-BUSINESS-INFORMATION'>
                    <div className='profile-infomation'>
                        <span>BUSINESS INFORMATION</span>
                        <div className="Profile-inputs">
                            <i>
                                <img src={Id} alt="" />
                            </i>
                            <input type="text" placeholder="Business Name" />
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={bussinesname} alt="" />
                            </i>
                            <select name="security-question" id="security-question">
                                <option value="1">Business Type</option>
                                <option value="2">Business Type</option>
                                <option value="3">Business Type</option>
                            </select>
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={industry} alt="" />
                            </i>
                            <select name="security-question" id="security-question">
                                <option value="1">Industry</option>
                                <option value="2">Industry</option>
                                <option value="3">Industry</option>
                            </select>
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={Id} alt="" />
                            </i>
                            <input type="text" placeholder="Tax Identification Number" />
                        </div>
                    </div>
                </div>

                <div className='Acccount-details-PAYMENT-INFORMATION'>
                    <div className='profile-infomation'>
                        <span>BANK DETAILS & PAYMENT INFORMATION</span>
                        <p>Bank Account</p>
                        <div className='paymentchecked'>
                            <input
                                type="checkbox"
                                id="bank-account"
                                className="custom-checkbox-input"
                            />
                            <span>I prefer to get paid through my <span style={{ color: '#000000', fontWeight: '600' }}>UK Bank Account</span></span>
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={Id} alt="" />
                            </i>
                            <input type="text" placeholder="Account Number" />
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={industry} alt="" />
                            </i>
                            <select name="security-question" id="security-question">
                                <option value="1">Select Bank</option>
                                <option value="2">Select Bank</option>
                                <option value="3">Select Bank</option>
                            </select>
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={Id} alt="" />
                            </i>
                            <input type="text" placeholder="Swift Code / BIC" />
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={industry} alt="" />
                            </i>
                            <input type="text" placeholder="Routing Number" />
                        </div>
                        <div className="Profile-inputs">
                            <i>
                                <img src={industry} alt="" />
                            </i>
                            <select name="security-question" id="security-question">
                                <option value="1">Account Type</option>
                                <option value="2">Account Type</option>
                                <option value="3">Account Type</option>
                            </select>
                        </div>

                        <div className='bussiness-registration'>
                            <label>Debit Card</label>
                            <div className="Profile-inputs">
                                <i>
                                    <img src={visa} alt="" />
                                </i>
                                <input type="text" placeholder="XXXX - XXXX - XXXX - 0324" />
                            </div>
                            <div className='debit-card'>
                                <div className="Profile-inputs-months">
                                    <select name="security-question" id="security-question">
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                    </select>
                                </div>
                                <div className="Profile-inputs-months">
                                    <select name="security-question" id="security-question">
                                        <option value="1">Year</option>
                                        <option value="2">2001</option>
                                        <option value="3">2002</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment-btn'>
                        <button className='addpayment'> <img src={redplus} alt="" />ADD NEW PAYMENT METHOD</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HOC(AccountDetails)