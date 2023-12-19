/** @format */

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const TransactionModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      ref={modalRef}
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: isOpen ? 200 : -100,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className={`payment_custom_modal`}
    >
      <div className="content">
        <div className="title">
          <p>TRANSACTION’S BREAKDOWN</p>
          <div>
            <img src="./Image/19.png" alt="" />
            <img src="./Image/20.png" alt="" />
          </div>
        </div>

        <div className="Table">
          <div className="head">
            <p>Charges</p>
            <p>Amount</p>
          </div>
          <div className="dashed_line"></div>

          <div className="three_sec">
            <p className="text_title">Fees & Charges</p>
            <div className="empty"></div>
            <p>£500</p>
          </div>
          <div className="three_sec">
            <p className="text_title">Exchange Rate</p>
            <div className="empty"></div>
            <p>£500</p>
          </div>

          <div className="dashed_line"></div>
          <div className="three_sec">
            <p className="text_total">TOTAL</p>
            <div className="empty"></div>
            <p className="price_total">£500</p>
          </div>
        </div>

        <div className="additional">
          <p className="note">Additional Notes -</p>
          <div>
            <img src="./Image/21.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate iaculis sollicitudin. Curabitur mollis ante
              id lacinia lobortis. Etiam lacinia velit luctus lacus pulvinar, eu
              sollicitudin felis pretium. In fermentum felis vitae porta
              hendrerit. Nulla ipsum sapien, imperdiet sed dolor quis, euismod
              aliquam justo. Nullam sed ante libero.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SenderModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      ref={modalRef}
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: isOpen ? 200 : -100,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className={`payment_custom_modal Sender_custom_Modal`}
    >
      <div className="sender_content">
        <div className="heading">
          <img src="./Image/12.png" alt="" />
          <div>
            <h6>Lorem Ipsum</h6>
            <span className="description">
              <span className="name">Lorem Ipsum</span>
              <span>£500 </span>
            </span>
          </div>
        </div>

        <div className="details">
          <div className="items">
            <img src="./Image/22.png" alt="" />
            <span>
              <p className="head">CARD DETAILS</p>
              <p>******0956</p>
            </span>
          </div>
          <div className="items">
            <img src="./Image/23.png" alt="" />
            <span>
              <p className="head">TRANSACTION LOCATION</p>
              <p>******0956</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ReciverModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      ref={modalRef}
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: isOpen ? 200 : -100,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className={`payment_custom_modal Sender_custom_Modal Reciver_custom_modal`}
    >
      <div className="sender_content">
        <div className="heading">
          <img src="./Image/12.png" alt="" />
          <div>
            <h6>Lorem Ipsum</h6>
            <span className="description">
              <span className="name">RECEIVER</span>
              <span>£500 </span>
            </span>
          </div>
        </div>

        <div className="details">
          <div className="items">
            <img src="./Image/22.png" alt="" />
            <span>
              <p className="head">BANK ACCOUNT DETAILS</p>
              <p>******0956</p>
            </span>
          </div>
          <div className="items">
            <img src="./Image/23.png" alt="" />
            <span>
              <p className="head">PHONE NO.</p>
              <p>+41 1234567890</p>
            </span>
          </div>
          <div className="items">
            <img src="./Image/23.png" alt="" />
            <span>
              <p className="head">EMAIL</p>
              <p>loremipsum@gmail.com</p>
            </span>
          </div>
          <div className="items">
            <img src="./Image/24.png" alt="" />
            <span>
              <p className="head">TRANSACTION LOCATION</p>
              <p>Lorem Ipsum City</p>
            </span>
          </div>
          <div className="items">
            <img src="./Image/25.png" alt="" />
            <span>
              <p className="head">DELIVERY METHOD</p>
              <p>Mobile Wallet</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


