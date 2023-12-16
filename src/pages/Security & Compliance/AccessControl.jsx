/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './AccessControl.css'
import plus from '../../Images/plu.png'
import profile from '../../Images/profile.png'
import staff from '../../Images/staf.png'
import { MdOutlineHistory } from "react-icons/md";
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";




const data = [
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
  },
  {
    id: "012345",
    name: "Lorem Ipsum",
    image: profile,
    designation: "Staff Member",
    image1: staff,
    time: '16 Mins Ago',
    lastLoggedin: "HH : MM ( DD/MM )",
    // receiver: "HH : MM ( DD/MM )",
    // status: "complete",
    // permissions: "Super-Admin",
  },
];

const AccessControl = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="pages">
        <h5><span onClick={()=>navigate('/gallery')}>Security & Compliance</span> / Role-Based Access Control</h5>
        <div className="Headingall">
          <div className="search">
            <div>
              <i><IoSearch /></i>
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter">
              <img src="./Image/16.png" alt="" />
              <span>FILTERS</span>
            </button>
            <button className="report">
              <img src={plus} alt="" />
              <span>ADD EMPLOYEE</span>
            </button>
          </div>
        </div>
        <div className="employeetable">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Last Logged In</th>
                <th>Permissions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <span> {i.id} </span>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={i.image} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="profilediv">
                      <img src={i.image1} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.designation}</span>
                    </div>
                  </td>
                  <td>
                    <div>{i.lastLoggedin}</div>
                    <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                      <MdOutlineHistory style={{ marginRight: '4px',  marginLeft:'50px'}} /> {i.time}
                    </p>
                  </td>
                  <td>
                    {i.permissions ? (
                      <span className="status complete">Super-Admin</span>
                    ) : (
                      <select>
                        <option>All Accessible</option>
                        <option className="options">Super-Admin</option>
                        <option className="options">Admin</option>
                        <option className="options">Head</option>
                        <option className="options">Manager</option>
                      </select>
                    )}
                  </td>
                  <td>
                    <img src={lines} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button>
            {" "}
            <i><FaChevronLeft /></i>PREVIOUS
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            NEXT <i><FaChevronRight /></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default HOC(AccessControl)