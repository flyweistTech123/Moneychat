/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Button, Table, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Baseurl } from "../../../Baseurl";
import HOC from "../../layout/HOC";

const Order = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalshow, setModalShow] = useState(false);
  const [productOrderId, setProductOrderId] = useState("");
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const FinalFromDate =
    fromDate === "" || fromDate?.length < 5 ? "" : `${fromDate}T00:00:00.000Z`;
  const FinalToDate =
    toDate === null || toDate?.length < 5 ? "" : `${toDate}T23:59:59.000Z`;

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getOrders = async () => {
    try {
      const response = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/admin/ProductOrder?search=${search}&fromDate=${FinalFromDate}&toDate=${FinalToDate}&page=${page}&limit=${limit}`,
        Auth
      );
      setData(response?.data?.data?.docs?.reverse());
      setTotal(response?.data?.data?.total);
    } catch (err) {
      console.log(err);
    }
  };

  function Prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function Next() {
    setPage(page + 1);
  }

  useEffect(() => {
    getOrders();
    window.scrollTo(0, 0);
  }, [search, FinalFromDate, FinalToDate, page, limit]);

  // Create Shipment

  function MyVerticallyCenteredModal(props) {
    const [first_mile_option, setFile_Mile_Option] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [units, setUnits] = useState("");
    const [customer_reference, setCustomer_Refrence] = useState("");
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [address_line1, setAddress_Line_1] = useState("");
    const [suburb, setSuburb] = useState("");
    const [state_name, setState_Name] = useState("");
    const [postcode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [instructions, setInstructions] = useState("");
    const [name2, setName2] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [address_line2, setAddressLine2] = useState("");
    const [suburb2, setSuburb2] = useState("");
    const [state_name2, setStateName2] = useState("");
    const [postcode2, setPostCode2] = useState("");
    const [country2, setCountry2] = useState("");

    const payload = {
      productOrderId,
      first_mile_option,
      description,
      weight: {
        value,
        units,
      },
      customer_reference,
      metadata: {
        userId,
      },
      sender: {
        contact: {
          name,
        },
        address: {
          address_line1,
          suburb,
          state_name,
          postcode,
          country,
        },
      },

      receiver: {
        instructions,
        contact: {
          name: name2,
          email,
          company,
        },
        address: {
          address_line1: address_line2,
          suburb: suburb2,
          state_name: state_name2,
          postcode: postcode2,
          country: country2,
        },
      },
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { res } = await axios.post(
          `${process.env.React_App_Baseurl}api/v1/admin/createShipment`,
          payload,
          Auth
        );
        toast.success("Submitted");
        props.onHide();
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Shipment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>First mile option</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pickup"
                onChange={(e) => setFile_Mile_Option(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Test"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Weight value</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Weight Unit</Form.Label>
              <Form.Control
                type="text"
                placeholder="kg"
                onChange={(e) => setUnits(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Refrence</Form.Label>
              <Form.Control
                type="text"
                placeholder="1537"
                onChange={(e) => setCustomer_Refrence(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="100"
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sender Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lex Luthor"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sender Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="123 Main Street"
                onChange={(e) => setAddress_Line_1(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sender Suburb</Form.Label>
              <Form.Control
                type="text"
                placeholder="Los Angeles"
                onChange={(e) => setSuburb(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sender state</Form.Label>
              <Form.Control
                type="text"
                placeholder="CA"
                onChange={(e) => setState_Name(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sender post code</Form.Label>
              <Form.Control
                type="text"
                placeholder="90001"
                onChange={(e) => setPostCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sender country</Form.Label>
              <Form.Control
                type="text"
                placeholder="US"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reciver Instruction</Form.Label>
              <Form.Control
                type="text"
                placeholder="Signature on Delivery"
                onChange={(e) => setInstructions(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reciver Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Clark Kent"
                onChange={(e) => setName2(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reciver Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="clarkissuper@dailyplanet.xyz"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reciver Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Daily Planet"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reciver Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="456 Elm Street"
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reciver suburb</Form.Label>
              <Form.Control
                type="text"
                placeholder="New York"
                onChange={(e) => setSuburb2(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reciver state </Form.Label>
              <Form.Control
                type="text"
                placeholder="NY"
                onChange={(e) => setStateName2(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reciver postcode </Form.Label>
              <Form.Control
                type="text"
                placeholder="10001"
                onChange={(e) => setPostCode2(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reciver country </Form.Label>
              <Form.Control
                type="text"
                placeholder="US"
                onChange={(e) => setCountry2(e.target.value)}
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalshow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <section className="sectionCont">
          <p className="headP">Dashboard / Order</p>

          <div className="pb-4  w-full flex justify-between items-center">
            <span
              className="tracking-widest text-slate-900 font-semibold uppercase"
              style={{ fontSize: "1.5rem" }}
            >
              All Order's (Total : {total})
            </span>
          </div>
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input
              type="search"
              placeholder="Search by OrderId"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="searchByDate">
            <div>
              <label>Starting Date </label>
              <input
                type="date"
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div>
              <label>Ending Date </label>
              <input type="date" onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>

          <div className="searchByDate">
            <div>
              <label>Showing : </label>
              <select onChange={(e) => setLimit(e.target.value)}>
                <option>
                  {" "}
                  Showing {data?.length} out of {total}{" "}
                </option>
                <option value={total}> All </option>
                <option value={10}> 10 </option>
                <option value={20}> 20 </option>
                <option value={50}> 50 </option>
                <option value={100}> 100 </option>
              </select>
            </div>
          </div>

          {data?.length === 0 || !data ? (
            <Alert>No Data Found</Alert>
          ) : (
            <>
              <div className="overFlowCont">
                <Table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Order Id</th>
                      <th>Sub Total</th>
                      <th>Shipping Amount</th>
                      <th>MemberShip Amount </th>
                      <th>Total Amount </th>
                      <th>Pick up Store </th>
                      <th>Order Status</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                      <th>Shipment</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.orderId} </td>
                        <td> ${i?.subTotal} </td>
                        <td> ${i?.shipping} </td>
                        <td> ${i.memberShip} </td>
                        <td> ${i.total} </td>
                        <td> {i.pickupFromStore === true ? "Yes" : "No"} </td>
                        <td>
                          {" "}
                          <Badge>{i.orderStatus}</Badge>{" "}
                        </td>
                        <td>
                          {" "}
                          <Badge>{i.paymentStatus}</Badge>{" "}
                        </td>
                        <td>
                          {" "}
                          <Badge>{i.deliveryStatus}</Badge>{" "}
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              setProductOrderId(i._id);
                              setModalShow(true);
                            }}
                          >
                            Create
                          </Button>
                        </td>

                        <td>
                          <span className="flexCont">
                            <span>
                              <Link to={`/order/${i._id}`}>
                                <i className="fa-solid fa-eye" />
                              </Link>
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </>
          )}

          <div className="pagination">
            <button onClick={() => Prev()} className="prevBtn">
              <i className="fa-solid fa-backward"></i>
            </button>

            <button className="activePage">{page}</button>

            <button onClick={() => Next()} className="nextBtn">
              {" "}
              <i className="fa-sharp fa-solid fa-forward"></i>
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Order);
