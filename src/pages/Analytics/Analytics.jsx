import React from 'react'
import HOC from "../../layout/HOC";
import FullScreenLoader from "../../Component/FullScreenLoader";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import './Analytics.css';
import increase from '../../Images/Mask group.png'
import Chart from "react-apexcharts";
import smallcross from '../../Images/smallcross.png'
import setting from '../../Images/setting.png'
import arrowbtn from '../../Images/arrowbtn.png'
import Repost from '../../Component/Modals/TransactionRepost/Repost';
import searchicon from '../../Images/searchicon.png'
import ibtn from '../../Images/ibtnnn.png'



const Analytics = () => {
    const Monday = 'DAY 1';
    const Tuesday = 'DAY 2';
    const Wednesday = 'DAY 3';
    const Thursday = 'DAY 4';
    const Friday = 'DAY 5';
    const Saturday = 'DAY 6';
    const Sunday = 'DAY 7';


    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        options: {
            colors: ["#FEA82F", "#FD575B"],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
            },
            toolbar: {
                show: false, // Hide the entire toolbar
            },
        },
        series: [
            {
                name: "TRANSACTIONS VOLUME",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
                name: "TRANSACTIONS VALUES",
                data: [3, 60, 35, 80, 49, 70, 20, 81],
            },
        ],
    });
    const [piestate, PieSetState] = useState({
        series: [44, 55, 13, 43],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['INDIA', 'USA', 'UNITED KINGDOM', 'OTHERS'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });
    const [barstate, barsetState] = useState({
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 50, 90, 10, 5, 40]
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
                    columnWidth: '12px',
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

                categories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

    return (
        <>
            <FullScreenLoader show={show} handleClose={handleClose} />
            <section className="pages">
                <div className="Heading_all2">
                    <h5>Analytics</h5>
                    <div className="search">
                        <img src="./Image/15.png" alt="" onClick={() => handleShow()} />
                        <div>
                            <i> <img src={searchicon} alt="" /></i>
                            <input type="search" placeholder="Search Transaction" />
                        </div>
                        <button className="report" onClick={openRepostModal}>
                            <img src="./Image/17.png" alt="" style={{ width: '30px', height: "30px" }} />
                            <span>REPORT</span>
                        </button>
                    </div>
                </div>
                <div className='uppercontainer'>
                    <div className="transaction-box">
                        <div className='transactionheader'>
                            <h2 className='transaction-title'>Transaction Volumes</h2>
                            <div className=''>
                                <select id="timeRange">
                                    <option value="This Week">THIS WEEK</option>
                                    <option value="This Month">THIS MONTH</option>
                                    <option value="Custom">CUSTOM</option>
                                    <option value="All Time">ALL TIME</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className="transaction-details">THIS WEEK</div> */}
                        <div className="transaction-details">5,000 <span>TRANSACTIONS PROCESSED</span></div>
                        <div className="transaction-details1 increase"> <img src={increase} alt="" /> +10% INCREASE  <span> IN TRANSACTIONS</span></div>
                        <div className="transaction-details2">AVERAGE TRANSACTIONAL AMOUNT - <br /><span> 2400 <img src={ibtn} alt="" /></span></div>
                    </div>
                    <div className='transaction-box'>
                        <div className='transactionheader'>
                            <h2 className='transaction-title'>TRENDS</h2>
                            <div className=''>
                                <select id="timeRange">
                                    <option value="This Week">THIS WEEK</option>
                                    <option value="This Month">THIS MONTH</option>
                                    <option value="Custom">CUSTOM</option>
                                    <option value="All Time">ALL TIME</option>
                                </select>
                            </div>
                        </div>
                        <div className='widht'>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="line"
                            />
                        </div>

                    </div>
                </div>

                <div className='charts'>
                    <div className="Heading_all" style={{ marginBottom: '20px' }}>
                        <h5>Insights & Tools</h5>
                    </div>
                    <div className='secondconatiner'>
                        <div className='transaction-box'>
                            <div className='transactionheader'>
                                <h2 className='transaction-title'>COMPARATIVE ANALYSIS</h2>
                                <div className=''>
                                    <select id="timeRange">
                                        <option value="This Week">THIS WEEK</option>
                                        <option value="This Month">THIS MONTH</option>
                                        <option value="Custom">CUSTOM</option>
                                        <option value="All Time">ALL TIME</option>
                                    </select>
                                </div>
                            </div>
                            <div className='widht'>
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="line"
                                />
                            </div>
                        </div>
                        <div className='transaction-box'>
                            <div className='transactionheader'>
                                <h2 className='transaction-title'>GEOGRAPHICAL DATA</h2>
                                <div className=''>
                                    <select id="timeRange">
                                        <option value="This Week">THIS WEEK</option>
                                        <option value="This Month">THIS MONTH</option>
                                        <option value="Custom">CUSTOM</option>
                                        <option value="All Time">ALL TIME</option>
                                    </select>
                                </div>
                            </div>
                            <div className='widht'>
                                <Chart options={piestate.options} series={piestate.series} type="pie" />
                            </div>

                        </div>
                    </div>
                    <div className='transaction-box' style={{ marginTop: '30px', marginBottom:'50px' }}>
                        <div className='transactionheader'>
                            <h2 className='transaction-title'>TIME BASED ANALYSIS</h2>
                            <div className=''>
                                <select id="timeRange">
                                    <option value="This Week">THIS WEEK</option>
                                    <option value="This Month">THIS MONTH</option>
                                    <option value="Custom">CUSTOM</option>
                                    <option value="All Time">ALL TIME</option>
                                </select>
                            </div>
                        </div>
                        <div className='widht'>
                            <Chart
                                options={barstate.options}
                                series={barstate.series}
                                type="bar"
                            />
                        </div>

                    </div>
                </div>

                {isRepostOpen && (
                    <Repost onClose={closeRepostModal}>

                        <div className="repostconatiner">
                            <div className="repostheder">
                                <div>
                                    <h3>Generate Analytics Report</h3>
                                </div>
                                <div className="repostimg">
                                    <img src={setting}></img>
                                    <img src={smallcross} onClick={closeRepostModal}></img>
                                </div>
                            </div>
                            <div className="repostline">
                                <hr />
                            </div>
                            <div className='analyticsrepost'>
                                <h6>Select the Sections which you want to include in the Report</h6>
                                <input type="checkbox" id="sectionCheckbox" name="sectionCheckbox" />
                                <label for="sectionCheckbox">Match <span>the Date Range in all</span> Selected Sections</label>
                            </div>

                            <div className="switchbtn">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider1 round"></span>
                                </label>
                                <div className='analticsvalume'>
                                    <p>TRANSACTIONAL VOLUMES</p>
                                    <div>
                                        <span>Range</span>
                                        <select id="timeRange">
                                            <option value="This Week">THIS WEEK</option>
                                            <option value="This Month">THIS MONTH</option>
                                            <option value="Custom">CUSTOM</option>
                                            <option value="All Time">ALL TIME</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="switchbtn">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider1 round"></span>
                                </label>
                                <div className='analticsvalume'>
                                    <p>TRENDS</p>
                                    <div>
                                        <span>Range</span>
                                        <select id="timeRange">
                                            <option value="This Week">THIS WEEK</option>
                                            <option value="This Month">THIS MONTH</option>
                                            <option value="Custom">CUSTOM</option>
                                            <option value="All Time">ALL TIME</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="switchbtn">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider1 round"></span>
                                </label>
                                <div className='analticsvalume'>
                                    <p>COMPARATIVE ANALYSIS</p>
                                    <div>
                                        <span>Range</span>
                                        <select id="timeRange">
                                            <option value="This Week">THIS WEEK</option>
                                            <option value="This Month">THIS MONTH</option>
                                            <option value="Custom">CUSTOM</option>
                                            <option value="All Time">ALL TIME</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="switchbtn">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider1 round"></span>
                                </label>
                                <div className='analticsvalume'>
                                    <p>GEOGRAPHICAL DATA</p>
                                    <div>
                                        <span>Range</span>
                                        <select id="timeRange">
                                            <option value="This Week">THIS WEEK</option>
                                            <option value="This Month">THIS MONTH</option>
                                            <option value="Custom">CUSTOM</option>
                                            <option value="All Time">ALL TIME</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="switchbtn">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider1 round"></span>
                                </label>
                                <div className='analticsvalume'>
                                    <p>TIME BASED ANALYSIS</p>
                                    <div>
                                        <span>Range</span>
                                        <select id="timeRange">
                                            <option value="This Week">THIS WEEK</option>
                                            <option value="This Month">THIS MONTH</option>
                                            <option value="Custom">CUSTOM</option>
                                            <option value="All Time">ALL TIME</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="repostselect">
                                <h3>Export As :</h3>
                                <div>
                                    <select>
                                        <option>PDF</option>
                                        <option >EXCEL SHEET</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="btn12">
                            <button className="exportbtn" onClick={triggerFileInput}>EXPORT</button>
                            <input type="file" id="fileInput" style={{ display: 'none' }} />
                            <div className="cancelbtn1">
                                <img src={arrowbtn}></img>
                                <button className="cancelbtn" onClick={closeRepostModal}>Cancel</button>
                            </div>
                        </div>

                    </Repost>
                )}
            </section>
        </>
    )
}

export default HOC(Analytics)