/** @format */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profile from '../Images/profilethree.png'
import cross from '../Images/crossthree.png'
import deletethree from '../Images/deletethree.png'
import info from '../Images/infothree.png'
import file from '../Images/filethree.png'
import edit from '../Images/notethree.png'
import download from '../Images/dowloadthree.png'
import idthree from '../Images/idthree.png'
import redinfo from '../Images/redinfomodal.png'
import AddNote from "./Modals/TransactionRepost/AddNote";
import Repost from "./Modals/TransactionRepost/Repost";
import smallcross from '../Images/smallcross.png'
import arrowbtn from '../Images/arrowbtn.png'
import flag from '../Images/falg.png'
import btnlearn from '../Images/btnlearnmore.png'
import uplbtn from '../Images/uploadbtn.png'
import text from '../Images/text.png'
import Flag from "./Modals/TransactionRepost/Flag";
import ViewProfileModal from "./Modals/ViewProfileModal/ViewProfileModal";
import Editprofile from "./Modals/ProfileModal/EditProfileModal";
import Recipient from "./Modals/TransactionRepost/Recipient";



export const TransactionModal = ({ isOpen, onClose }) => {
  const [isRepostOpen, setRepostOpen] = useState(false)
  const [isFlagOpen, setFlagOpen] = useState(false)
  const [isProfileModalopen, setProfileModalOpen] = useState(false);
  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }

  const openFlagModal = () => {
    setFlagOpen(true);
  }

  const closeFlagModal = () => {
    setFlagOpen(false);
  }


  const openProfileModal = () => {
    setProfileModalOpen(true)
  }

  const closeProfileModal = () => {
    setProfileModalOpen(false)
  }



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
        <div className="title ">
          <p>TRANSACTION’S BREAKDOWN</p>
          <div>
            <img src="./Image/19.png" alt="" onClick={openRepostModal} />
            <img src="./Image/20.png" alt="" onClick={openFlagModal} />
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

      {/* CurrenciesrModallist */}
      {isRepostOpen && (
        <AddNote onClose={closeRepostModal}>
        </AddNote>
      )}

      {isFlagOpen && (
        <Flag onClose={closeFlagModal}>
        </Flag>
      )}
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

export const Threeline1 = ({ isOpen, onClose }) => {
  const [isProfileModalopen, setProfileModalOpen] = useState(false);
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

  const openProfileModal = () => {
    setProfileModalOpen(true)
  }

  const closeProfileModal = () => {
    setProfileModalOpen(false)
  }

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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline_content">
        <div className="heading">
          <img src={profile} alt="" />
          <div>
            <span className="description" >
              <span className="name" onClick={openProfileModal}>View Profile</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={cross} alt="" />
          <div>
            <span className="description">
              <span className="name" style={{ color: '#FC0005' }}>Block Employee</span>
            </span>
          </div>
        </div>
      </div>
      {isProfileModalopen && (
        <ViewProfileModal onClose={closeProfileModal} isProfileModalopen={isProfileModalopen}>

        </ViewProfileModal>
      )}
    </motion.div>
  );
};


export const Threeline2 = ({ isOpen, onClose }) => {
  const [isFlagOpen, setFlagOpen] = useState(false)
  const openFlagModal = () => {
    setFlagOpen(true);
  }

  const closeFlagModal = () => {
    setFlagOpen(false);
  }
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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline_content">
        <div className="heading">
          <img src={deletethree} alt="" />
          <div>
            <span className="description">
              <span className="name">Unflag & Remove</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={info} alt="" />
          <div>
            <span className="description" onClick={openFlagModal}>
              <span className="name">View Information</span>
            </span>
          </div>
        </div>

      </div>
      {isFlagOpen && (
        <Flag onClose={closeFlagModal}>
        </Flag>
      )}
    </motion.div>
  );
};



export const Threeline3 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isRepostOpen, setRepostOpen] = useState(false)
  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };


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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline_content">
        <div className="heading">
          <img src={file} alt="" />
          <div>
            <span className="description">
              <span className="name">View</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={edit} alt="" />
          <div>
            <span className="description">
              <span className="name" onClick={openRepostModal}>Edit</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={deletethree} alt="" />
          <div>
            <span className="description">
              <span className="name" style={{ color: '#FC0005' }}>Delete</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={download} alt="" />
          <div>
            <span className="description">
              <span className="name" onClick={openRepostModal}>Download</span>
            </span>
          </div>
        </div>
      </div>

      {isRepostOpen && (
        <Repost onClose={closeRepostModal}>

          <div className="repostconatiner">
            <div className="repostheder">
              <div>
                <h3>Edit Document / Resource Details</h3>
              </div>
              <div className="repostimg">
                {/* <img src={setting}></img> */}
                <img src={smallcross} onClick={closeRepostModal}></img>
              </div>
            </div>
            <div className="repostline">
              <hr />
            </div>
            <div className="sender">
              <div className="searchbar" style={{ width: '660px' }}>
                <i><img style={{ width: '30px', height: '30px', color: '#00000080' }} src={text}></img></i>
                <input type="text" placeholder="Add Title" />
              </div>
            </div>
            <div className="repostselect">
              <div>
                <select>
                  <option>Select Category</option>
                  <option >WEEKLY</option>
                  <option>MONTHLY</option>
                  <option>MONTHLY</option>
                  <option >HALF-YEARLY ( 6 MONTHS )</option>
                  <option>YEARLY</option>
                </select>
              </div>

            </div>

            <div className="upload-box" onClick={triggerFileInput}>
              <input type="file" id="fileInput" style={{ display: 'none' }} />
              <div className="icon"><img src={uplbtn} alt="" /></div>
              <div>
                <p>CLICK TO UPLOAD</p>
                <span className="text">*Docx , Pdf , Txt etc.</span>
              </div>

            </div>

            <div className="textarea1">
              <textarea rows="6" cols="30" placeholder="Add Description..............."></textarea>
            </div>
          </div>

          <div className="btn12">
            <button className="exportbtn" onClick={closeRepostModal}>SUBMIT</button>
            <div className="cancelbtn1">
              <img src={arrowbtn}></img>
              <button className="cancelbtn" onClick={closeRepostModal}>Cancel</button>
            </div>
          </div>

        </Repost>
      )}
    </motion.div>
  );
};


export const Threeline4 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isRepostOpen, setRepostOpen] = useState(false)
  const [isProfileModalopen, setProfileModalOpen] = useState(false);
  const openRepostModal = () => {
    setRepostOpen(true);
  }

  const closeRepostModal = () => {
    setRepostOpen(false);
  }
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

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

  const openProfileModal = () => {
    setProfileModalOpen(true)
  }

  const closeProfileModal = () => {
    setProfileModalOpen(false)
  }

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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline_content">
        <div className="heading">
          <img src={profile} alt="" />
          <div>
            <span className="description">
              <span className="name" onClick={openProfileModal}>View / Edit Profile</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={idthree} alt="" />
          <div>
            <span className="description">
              <span className="name" onClick={openRepostModal}>Verify Recipient</span>
            </span>
          </div>
        </div>
      </div>
      {isRepostOpen && (
        <Recipient onClose={closeRepostModal}>

        </Recipient>
      )}


      {isProfileModalopen && (
        <Editprofile onClose={closeProfileModal} isProfileModalopen={isProfileModalopen}>

        </Editprofile>
      )}
    </motion.div>
  );
};



export const Inffo = ({ isOpen, onClose }) => {
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
      className={`payment_custom_modal Sender_custom_Modal Inffo_cutom_modal`}
    >
      <div className="Inffo_content">
        <div className="heading">
          <div>
            <span className="description">
              <img src={redinfo} alt="" />
              <span className="name">Recipient’s Account has <span style={{ color: '#000000' }}>reached</span> the limit of receiving maximum amount  of <span style={{ color: '#000000' }}>$10,000</span>  & now <span style={{ color: '#FC0005' }}>restricted</span> for any further Transactions by the system</span>
            </span>
          </div>
        </div>
        <img src={btnlearn} alt="" style={{ marginTop: "2px" }} />
      </div>
    </motion.div>
  );
};



export const Threeline6 = ({ isOpen, onClose }) => {
  const [isProfileModalopen, setProfileModalOpen] = useState(false);
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

  const openProfileModal = () => {
    setProfileModalOpen(true)
  }

  const closeProfileModal = () => {
    setProfileModalOpen(false)
  }

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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline_content">
        <div className="heading">
          <img src={profile} alt="" />
          <div>
            <span className="description" >
              <span className="name" onClick={openProfileModal}>View Profile</span>
            </span>
          </div>
        </div>
        <div className="heading" style={{ marginTop: '20px' }}>
          <img src={cross} alt="" />
          <div>
            <span className="description">
              <span className="name" style={{ color: '#FC0005' }}>Block Employee</span>
            </span>
          </div>
        </div>
      </div>
      {isProfileModalopen && (
        <ViewProfileModal onClose={closeProfileModal} isProfileModalopen={isProfileModalopen}>

        </ViewProfileModal>
      )}
    </motion.div>
  );
};






export const Threeline7 = ({ isOpen, onClose }) => {
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
      className={`payment_custom_modal Sender_custom_Modal ThreeLine_custom_Modal`}
    >
      <div className="threeline7_content">
        <h6>Permissions</h6>
        <div className="heading">
          <input
            type="checkbox"
            id="myCheckbox"
          />
          <div>
            <span className="description" >
              <span className="name">Super-Admin</span>
            </span>
          </div>
        </div>
        <div className="heading">
          <input
            type="checkbox"
            id="myCheckbox"
          />
          <div>
            <span className="description" >
              <span className="name">Admin</span>
            </span>
          </div>
        </div>
        <div className="heading">
          <input
            type="checkbox"
            id="myCheckbox"
          />
          <div>
            <span className="description" >
              <span className="name">Head</span>
            </span>
          </div>
        </div>
        <div className="heading">
          <input
            type="checkbox"
            id="myCheckbox"
          />
          <div>
            <span className="description" >
              <span className="name">Manager</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};




