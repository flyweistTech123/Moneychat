/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './flaggedtransactions.css'
import agent from '../../Images/agent.png'
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";
import lines from '../../Images/lines.png'
import { useNavigate } from "react-router-dom";
import ibutton from '../../Images/i.png'





const data = [
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby:'Agent',
    image: agent,
    risk:'80%'
  },
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby:'Agent',
    image: agent,
    risk:'80%'
  },
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby:'Agent',
    image: agent,
    risk:'80%'
  },
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby:'Agent',
    image: agent,
    risk:'80%'
  },
  {
    amount: "£2000",
    id: "ABCD12345",
    dateoftransaction: "DD/MM/YYYY",
    time: '(6:30 AM)',
    flaggedon: "DD/MM/YYYY",
    flaggedby:'Agent',
    image: agent,
    risk:'80%'
  },
];

const Flaggedtransactions = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="pages">
        <h5><span onClick={()=>navigate('/gallery')}>Security & Compliance</span> / Flagged Transactions</h5>
        <div className="Headingall">
          <div className="search">
            <div>
              <i><IoSearch /></i>
              <input type="search" placeholder="Search"  />
            </div>
          </div>

          <div className="button_container">
            <button className="filter">
              <img src="./Image/16.png" alt="" />
              <span>FILTERS</span>
            </button>
          </div>
        </div>
        <div className="Flaggedtable">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Ref. ID</th>
                <th>Date of Transaction</th>
                <th>Flagged On</th>
                <th>Flagged By</th>
                <th>Risk</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                  <span className="amount_td">
                    <span style={{fontSize:'25px', color:'#000000'}}> {i.amount} </span>
                    <img
                      src="./Image/18.png"
                      alt=""
                     
                    />
                  </span>
                  </td>
                  <td>
                  <span >{i.id}</span>
                  </td>
                  <td>
                  <div>{i.dateoftransaction}</div>
                    <p>
                     {i.time}
                    </p>
                  </td>
                  <td>
                  <div>{i.flaggedon}</div>
                    <p style={{ margin: 0 , color:'#FD575B'}}>
                     {i.time}
                    </p>
                  </td>
                  <td>
                  <div className="profilediv">
                      <img src={i.image} alt="Profile" style={{ marginRight: "8px" }} />
                      <span>{i.flaggedby}</span>
                    </div>
                  </td>
                  <td>
                  <div className="profilediv">
                      <img src={ibutton} alt="Profile" style={{ marginRight: "8px" }} />
                      <span style={{color:"#FC0005"}}>{i.risk}</span>
                    </div>
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

export default HOC(Flaggedtransactions)