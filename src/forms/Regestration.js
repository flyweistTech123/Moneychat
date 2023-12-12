/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";

const Regestration = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate()

  let RegComponent;
  if (step === 1) {
    const Component = () => {
      return (
        <>
          <div className="progress_bar">
            <div className="colored"></div>
          </div>

          <div className="description">
            <h6>New Registration! </h6>
            <p>Please provide the following Information to Continue!</p>
          </div>

          <div className="input_container special">
            <div className="input_group mt-5">
              <img src="./Image/1.png" alt="" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input_group mt-3">
              <img src="./Image/5.png" alt="" />
              <input type="text" placeholder="Contact Number" />
            </div>
            <div className="input_group mt-3">
              <img src="./Image/6.png" alt="" />
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input_group mt-3">
              <img src="./Image/7.png" alt="" />
              <input type="text" placeholder="New  Password" />
            </div>
            <div className="input_group mt-3">
              <img src="./Image/8.png" alt="" />
              <input type="text" placeholder="Re - Enter Password" />
            </div>
          </div>

          <div className="button_container">
            <button onClick={() => setStep(2)}>CONTINUE</button>
            <div className="cancel">
              <img src="./Image/9.png" alt="" />
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </>
      );
    };
    RegComponent = <Component />;
  } else if (step === 2) {
    const Component = () => {
      return (
        <>
          <div className="progress_bar">
            <div className="second_stage"></div>
          </div>

          <div className="description">
            <h6>Upload Documents! </h6>
            <p>
              Please provide the following Documents to register your Account!
            </p>
          </div>

          <div className="input_container special">
            <p className="heading">BUSINESS REGISTRATION & LICENSING</p>

            <div className="whole_button_container">
              <p>Business License</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <div className="whole_button_container">
              <p>Certificate of Incorporation</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <p className="heading">IDENTITY VERIFICATION</p>
            <div className="whole_button_container">
              <p>Owner/Operator ID</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            <div className="whole_button_container">
              <p>Proof of Address</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <p className="heading">FINANCIAL INFORMATION</p>
            <div
              className="input_group"
              style={{ width: "90%", padding: "20px" }}
            >
              <img src="./Image/11.png" alt="" />
              <input
                type="text"
                className="without_color"
                placeholder="Account Number"
              />
            </div>
            <div
              className="input_group mt-3"
              style={{ width: "90%", padding: "20px" }}
            >
              <img src="./Image/11.png" alt="" />
              <input
                type="text"
                className="without_color"
                placeholder="Select Business Bank"
              />
            </div>
            <div
              className="input_group mt-3"
              style={{ width: "90%", padding: "20px" }}
            >
              <img src="./Image/11.png" alt="" />
              <input
                type="text"
                className="without_color"
                placeholder="Sort Code"
              />
            </div>

            <div className="whole_button_container">
              <p>Financial Statements</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <p className="heading">
              COMPLIANCE WITH ANTI-MONEY LAUNDERING LAWS ( AML ) DOCUMENTS
            </p>
            <div className="whole_button_container">
              <p>AML Policy</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            <div className="whole_button_container">
              <p>AML Training Periods</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <p className="heading">
              KNOW YOUR CUSTOMER ( KYC ) PROCEDURES DOCUMENT
            </p>
            <div className="whole_button_container">
              <p>KYC Policy</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            <div className="whole_button_container">
              <p>Sample KYC Records</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>

            <p className="heading">DATA PROTECTION & PRIVACY DOCUMENT</p>
            <div className="whole_button_container">
              <p>Data Protection Policy</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            <div className="whole_button_container">
              <p>Data Processing Agreements</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>


            <p className="heading">OPERATIONAL & COMPLIANCE AUDITS DOCUMENT</p>
            <div className="whole_button_container">
              <p>Audit Reports</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            <div className="whole_button_container">
              <p>Compliance Certifications</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>


            <p className="heading">OPERATIONAL & COMPLIANCE AUDITS DOCUMENT</p>
            <div className="whole_button_container">
              <p>Liability Insurance</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            

            <p className="heading">REFERENCE DOCUMENT</p>
            <div className="whole_button_container">
              <p>Business References</p>
              <button>
                <img src="./Image/10.png" alt="" />
                <span>UPLOAD</span>
              </button>
            </div>
            

          </div>

          <div className="button_container">
            <button onClick={() => navigate('/verify')}>REGISTER</button>
            <div className="cancel">
              <img src="./Image/9.png" alt="" />
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </>
      );
    };
    RegComponent = <Component />;
  }

  return (
    <div className="Login_screen">
      <form className="Login_Container ">
        <img src={logo} alt="" className="logo" />

        {RegComponent}
      </form>
    </div>
  );
};

export default Regestration;
