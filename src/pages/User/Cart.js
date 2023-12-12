/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const [serviceShow, setServiceShow] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/admin/getCart/${id}`,
        Auth
      );
      setData(data.cart);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Service Modal
  function ServiceModal(props) {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.React_App_Baseurl}api/v1/Service/all/paginateServiceSearch`
        );
        const data = res.data.data?.docs;
        setProducts(data);
      } catch {}
    };

    useEffect(() => {
      if (props.show) {
        getProducts();
      }
    }, [props]);

    const payload = {
      quantity: 1,
      userId: id,
      date,
      time,
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.React_App_Baseurl}api/v1/admin/addtoCart/service/${productId}`,
          payload,
          Auth
        );
        toast.success(data.message);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Service</Form.Label>
              <Form.Select
                required
                onChange={(e) => setProductId(e.target.value)}
              >
                <option>Select Your Prefrence</option>
                {products?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.name}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                required
                type="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: "#19376d", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteService = async (payload) => {
    try {
      const { res } = await axios.delete(
        `${process.env.React_App_Baseurl}api/admin/cart/delete/service/${payload}/${id}`,
        Auth
      );
      toast.success("Removed");
      fetchData();
    } catch {}
  };

  const checkoutHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.React_App_Baseurl}api/v1/admin/checkout/${id}`,
        {},
        Auth
      );
      if (response.data?.data?.orderId) {
        successOrder(response.data?.data?.orderId);
      }
    } catch {}
  };

  const successOrder = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/admin/successOrder/${id}`,
        Auth
      );
      toast.success("Order Created");
      fetchData();
    } catch {}
  };

  return (
    <>
      <ServiceModal show={serviceShow} onHide={() => setServiceShow(false)} />

      <section className="sectionCont">
        <p className="headP">Dashboard / User Cart</p>

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            User Cart
          </span>
          <div className="d-flex gap-2">
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
              onClick={() => setServiceShow(true)}
            >
              Add Service
            </button>
          </div>
        </div>

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          ></span>
          <div className="d-flex gap-2">
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
              onClick={() => checkoutHandler()}
            >
              Checkout
            </button>
          </div>
        </div>

        <div className="overFlowCont">
          {!data ? (
            <Alert>No Data Found</Alert>
          ) : (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Service Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.services?.map((i, index) => (
                    <tr key={index}>
                      <td> #{index + 1} </td>
                      <td> {i.serviceId?.name} </td>
                      <td> {i.quantity} </td>
                      <td>
                        {" "}
                        <i className="fa-solid fa-dollar-sign"></i>
                        {i.total}{" "}
                      </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-eye"
                            onClick={() =>
                              navigate(`/service/${i.serviceId?._id}`)
                            }
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-trash"
                            onClick={() => deleteService(i.serviceId?._id)}
                          ></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default HOC(Cart);
