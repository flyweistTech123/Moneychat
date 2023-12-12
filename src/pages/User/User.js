/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [query, setQuery] = useState("");

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
        `${process.env.React_App_Baseurl}api/v1/admin/getAllUser`
      );
      setData(data?.data);
      setTotal(data?.data?.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.React_App_Baseurl}api/v1/admin/deleteUser/${id}`,
        Auth
      );
      toast.success("User Deleted");
      fetchData();
    } catch (e) {
      const msg = e.response.data.message;
      toast.error(msg);
    }
  };

  // Regestration Modal
  function MyVerticallyCenteredModal(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      password,
      dob,
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.React_App_Baseurl}api/v1/admin/clientRegistration`,
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select onChange={(e) => setGender(e.target.value)}>
                <option>Select Your Prefrence</option>
                <option value={"Male"}> Male </option>
                <option value={"Female"}> Female </option>
                <option value={"Other"}> Other </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDob(e.target.value)}
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

  const targteHandler = () => {
    const target = document.getElementById("file");
    target.click();
  };

  const uploader = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    try {
      const { res } = await axios.post(
        `http://127.0.0.1:2019/api/v1/admin/uploadClient`,
        fd,
        Auth
      );
      toast.success("Uploaded");
    } catch {}
  };

  // Filter User

  const TotolData = query
    ? data?.filter(
        (i) =>
          i?.firstName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.lastName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.email?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.phone?.toString()?.toLowerCase().includes(query?.toLowerCase())
      )
    : data;

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section className="sectionCont">
        <p className="headP">Dashboard / All User</p>

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All User's ( Total : {total} )
          </span>
          <div className="flex gap-2">
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
              onClick={() => targteHandler()}
            >
              Upload
            </button>
            <input
              onChange={(e) => uploader(e.target.files[0])}
              style={{ display: "none" }}
              id="file"
              type="file"
            />

            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
              onClick={() => setModalShow(true)}
            >
              Create New
            </button>
          </div>
        </div>

        {data?.length === 0 || !data ? (
          <SpinnerComp />
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Seach by First Name , Last Name , Email Address and Phone Number"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="overFlowCont">
              {data?.length === 0 || !data ? (
                <Alert>No User Found</Alert>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Mobile Number</th>
                      <th>Email Address</th>
                      <th>Gender</th>
                      <th>Cart</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TotolData?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.firstName} </td>
                        <td> {i.lastName} </td>
                        <td>
                          <i
                            className="fa-solid fa-plus"
                            style={{ fontSize: "10px", marginRight: "2px" }}
                          />
                          {i.phone}
                        </td>
                        <td>{i.email}</td>
                        <td>{i.gender}</td>
                        <td>
                          <button
                            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
                            onClick={() => navigate(`/cart/${i._id}`)}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <span className="flexCont">
                            <i
                              className="fa-solid fa-eye"
                              onClick={() => navigate(`/user-data/${i._id}`)}
                            ></i>
                            <i
                              className="fa-sharp fa-solid fa-trash"
                              onClick={() => deleteHandler(i._id)}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(User);
