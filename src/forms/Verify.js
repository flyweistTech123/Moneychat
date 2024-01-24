/** @format */

import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Verify = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const time = 3000;

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [time]);
  }, [navigate]);

  return (
    <Offcanvas show={show} onHide={handleClose} className="VerifyCanvas">
      <Offcanvas.Body className="Verify_Body">
        <div>
        <img src="./Image/success-unscreen.gif" alt="" />
          <h6>Your Account has been sent for <span>Verification!</span></h6>
          <p>Our Executives will review your Account and notify accordingly!</p>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Verify;
