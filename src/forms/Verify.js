/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const time = 3000;

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [time]);
  }, [navigate]);

  return (
    <div className="verify">
      <img src="./Image/success.gif" alt="" />
      <p className="colored">
        Your Account has been sent for{" "}
        <span style={{ color: "#0070BC" }}>Verification !</span>{" "}
      </p>
      <p>Our Executives will review your Account and notify accordingly!</p>
    </div>
  );
};

export default Verify;
