/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HOC from "../../layout/HOC";

const SingleService = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getOrder = async () => {
    try {
      const response = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/Service/${id}`
      );
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  function ValueChecker(holder, string) {
    return holder ? (
      <div className="Desc-Container mt-1">
        <p className="title"> {string} </p>
        <p className="desc"> {holder} </p>
      </div>
    ) : (
      ""
    );
  }

  return (
    <>
      <section>
        <p className="headP">Dashboard / {data?.name}</p>
        <section className="sectionCont">
          <Form>
            {data?.images && (
              <div className="Desc-Container">
                <p className="title"> Service Images </p>
                <div className="img-cont">
                  {data?.images?.map((i) => (
                    <img
                      src={i.img}
                      alt=""
                      className="centerImage"
                      key={`service-img ${i._id}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {data?.beforeAfterImage && (
              <div className="Desc-Container">
                <p className="title"> Before and After </p>
                <div className="img-cont">
                  <img
                    src={data?.beforeAfterImage}
                    alt=""
                    className="centerImage"
                  />
                </div>
              </div>
            )}
            {ValueChecker(data?.name, "Title")}
            {ValueChecker(data?.categoryId?.name, "Category")}
            {ValueChecker(data?.price, "Price")}
            {ValueChecker(data?.mPrice, "Member Price")}
            {ValueChecker(data?.description, "Description")}
            {ValueChecker(data?.rating, "Rating")}
            {ValueChecker(data?.sellCount, "Sell Count")}
            {ValueChecker(data?.type, "Type")}
            {ValueChecker(data?.discountPrice, "Discounted Price")}
            {ValueChecker(data?.discount, "Discount")}
            {data?.area?.length > 0 && (
              <div className="Desc-Container mt-1">
                <p className="title"> Area </p>
                {data?.area?.map((i, index) => (
                  <p className="desc" key={`Area${index}`}>
                    {" "}
                    {i}{" "}
                  </p>
                ))}
              </div>
            )}
            {data?.benfit?.length > 0 && (
              <div className="Desc-Container mt-1">
                <p className="title"> Benefit </p>
                {data?.benfit?.map((i, index) => (
                  <p className="desc" key={`Area${index}`}>
                    {" "}
                    {i}{" "}
                  </p>
                ))}
              </div>
            )}
            {data?.session?.length > 0 && (
              <div className="Desc-Container mt-1">
                <p className="title"> Session (s) </p>
                {data?.session?.map((i, index) => (
                  <p className="desc" key={`Area${index}`}>
                    {" "}
                    {i}{" "}
                  </p>
                ))}
              </div>
            )}

            <div className="Desc-Container mt-1">
              <p className="title"> Multiple Size </p>
              <p className="desc">
                {data?.multipleSize === true ? "Activated" : "Disactivated"}
              </p>
            </div>
            <div className="Desc-Container mt-1">
              <p className="title"> Sizes </p>
              {data?.sizePrice?.map((i, index) => (
                <>
                  <p className="desc" key={`Seizes${index}`}>
                    Member Price : {i.mPrice}
                  </p>
                  <p className="desc" key={`Seizes${index}`}>
                    Price : {i.price}
                  </p>
                  <p className="desc" key={`Seizes${index}`}>
                    Size : {i.size}
                  </p>
                </>
              ))}
            </div>

            {ValueChecker(data?.createdAt?.slice(0, 10), "Created At")}

            <Link to="/service">
              <Button variant="dark">Back</Button>
            </Link>
          </Form>
        </section>
      </section>
    </>
  );
};

export default HOC(SingleService);
