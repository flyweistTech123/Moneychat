import React from 'react'
import HOC from "../../layout/HOC";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Chart from "react-apexcharts";
import './Financial.css'
import reve from '../../Images/reve.png'



const Financial = () => {
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };


  const [state, setState] = useState({
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    },
    ],
    options: {
      colors: ["#FEA82F", "#FD575B"],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '34px',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'TODAY'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  });


  const [chartstate, chartsetState] = useState({
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    },
    ],
    options: {
      colors: ["#00AAEAB2"],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '34px',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'TODAY'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  });
  return (
    <>
      <section className='pages'>
        <div className="Heading_all">
          <h5>Financial Overview</h5>
          <div className="button_container">
            <button className="report" onClick={triggerFileInput}>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
              <img src="./Image/17.png" alt="" />
              <span>REPORT</span>
            </button>
          </div>
        </div>

        <div className='finacial-box' style={{ marginTop: '20px' }}>
          <div className='finacialheader'>
            <div>
              <select id="timeRange">
                <option value="This Week">THIS WEEK</option>
                <option value="This Month">THIS MONTH</option>
                <option value="Custom">CUSTOM</option>
                <option value="All Time">ALL TIME</option>
              </select>
            </div>
            <div className='finacial-title'>
              <img src={reve} alt="" />
              <h1>Total Revenue <span>( This Week )</span> -  <span>£8,000</span></h1>
            </div>
          </div>
          <div>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width='100%'
            />
          </div>
        </div>


        <div className='finacial-box' style={{ marginTop: '20px' }}>
          <div className='finacialheader'>
            <div>
              <select id="timeRange">
                <option value="This Week">THIS WEEK</option>
                <option value="This Month">THIS MONTH</option>
                <option value="Custom">CUSTOM</option>
                <option value="All Time">ALL TIME</option>
              </select>
            </div>
            <div className='finacial-title'>
              <img src={reve} alt="" />
              <h1>Settlement Amount <span>( This Week )</span> -  <span>£8,000</span></h1>
            </div>
          </div>
          <div>
            <p style={{ float: 'right', paddingRight: '30px' }}>CURRENT COMISSION STRUCTURE - 1%</p>
            <Chart
              options={chartstate.options}
              series={chartstate.series}
              type="bar"
              width='100%'
            />
          </div>
        </div>

      </section>
    </>
  )
}

export default HOC(Financial)