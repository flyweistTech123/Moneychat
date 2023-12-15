/** @format */

import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import './Compliancerecords.css'
import upload from '../../Images/upload.png'
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dot from '../../Images/dot.png'




const data = [
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non rhoncus risus. Mauris aliquet lectus ut leo scelerisque ",
    category: "Lorem Ipsum",
    status: "__",
  },
];

const Compliancerecords = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="pages">
        <h5><span onClick={()=>navigate('/gallery')}>Security & Compliance</span> / Compliance Records</h5>
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
              <img src={upload} alt="" />
              <span>UPLOAD</span>
            </button>
          </div>
        </div>
        <div className="compliancetable">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <span style={{color:'#000000'}}> {i.title} </span>
                  </td>
                  <td>
                    <p>{i.description}</p>
                  </td>
                  <td>
                    <span>{i.category}</span>
                  </td>
                  <td>
                    <span>{i.status}</span>
                  </td>
                  <td>
                    <img src={dot} alt="" />
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

export default HOC(Compliancerecords)