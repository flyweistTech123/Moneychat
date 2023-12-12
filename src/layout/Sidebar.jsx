/** @format */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
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
      link: "/Product",
      name: "Analytics ",
    },

    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/service",
      name: "Documentation & Resources",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/gallery",
      name: "Security & Compliance",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/getblog",
      name: "Financial Overview",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/privacy-policy",
      name: "Recipient’s Management",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/terms",
      name: "Communication Tools",
    },
    {
      img: "./Image/Analytics.svg",
      activeImg: "./Image/Analyticsactive.svg",
      link: "/brand",
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
      <aside className="sidebar">
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
    </>
  );
};

export default Sidebar;
