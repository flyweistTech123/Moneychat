/** @format */
import logo from "../Images/logo.png";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="search_bar">
          <i><IoSearch /></i>
          <input type="search" placeholder="Search..." />
        </div>

        <div className="side_div">
          <img src="./Image/13.png" alt="" className="notify" />

          <div className="content">
            <img src="./Image/12.png" alt="" />
            <div>
              <p className="head">Dave Smith</p>
              <a href='/'>VIEW MORE </a>
            </div>
          </div>

        </div>


      </div>
    </>
  );
};

export default Navbar;
