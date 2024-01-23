/** @format */

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import icon1 from '../Images/icon1.png'
import activeicon1 from '../Images/activeicon1.png'
import icon2 from '../Images/icon2.png'
import activeicon2 from '../Images/activeicon2.png'
import icon3 from '../Images/icon3.png'
import activeicon3 from '../Images/activeicon3.png'
import icon4 from '../Images/icon4.png'
import activeicon4 from '../Images/activeicon4.png'
import icon5 from '../Images/icon5.png'
import activeicon5 from '../Images/activeicon5.png'
import icon6 from '../Images/icon6.png'



const Sidebar = ( {isMenuOpen, toggleMenu,show }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const nav = [
    {
      img: "./Image/14.svg",
      activeImg: "./Image/Monitoring.svg",
      link: "/transaction",
      name: "Transaction Monitoring",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/analytics",
      name: "Analytics ",
    },

    {
      img: icon1,
      activeImg: activeicon1,
      link: "/documentation&resources",
      name: "Documentation & Resources",
    },
    {
      img: icon2,
      activeImg: activeicon2,
      link: "/security&scompliance",
      name: "Security & Compliance",
    },
    {
      img: icon3,
      activeImg: activeicon3,
      link: "/financial_overview",
      name: "Financial Overview",
    },
    {
      img: icon4,
      activeImg: activeicon4,
      link: "/recipient_management",
      name: "Recipient’s Management",
    },
    {
      img: icon5,
      activeImg: activeicon5,
      link: "/communication_tools",
      name: "Communication Tools",
    },
    {
      img: icon6,
      activeImg: "./Image/Monitoring.svg",
      link: "/review_interface",
      name: "Review Interface",
    },
  ];

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged Out");
  };

  function ImgFinder(i) {
    if (i.link === location.pathname) {
      return i.activeImg;
    } else {
      return i.img;
    }
  }
  

  return (
  
    <>
    {
      show &&  <aside className="sidebar">
      {/* <span className='close1' onClick={toggleMenu}>
      <MdClose />
      </span> */}
        <nav className="py-6">
          <ul>
            {nav.map((nav) => {
              return (
                <Link
                  to={nav.link}
                  key={nav.name}
                  className={`Links ${
                    nav.link === location.pathname ? "active" : ""
                  }`}
                >
                  <li>
                    <img src={ImgFinder(nav)} alt="" />
                    <span className="link"> {nav.name}</span>
                  </li>
                </Link>
              );
            })}
          </ul>

          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          ></span>
        </nav>
      </aside>
    }
     
    </>
  );
};

export default Sidebar;
