/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../../../Baseurl";
import HOC from "../../layout/HOC";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getOrder = async () => {
    try {
      const response = await axios.get(`${process.env.React_App_Baseurl}api/v1/Product/${id}`);
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
      <div className="Desc-Container">
        <p className="title"> {string} </p>
        <p className="desc"> {holder} </p>
      </div>
    ) : (
      ""
    );
  }

  return (
    <>
      <section className="sectionCont">
        {data?.productImages && (
          <div className="Desc-Container">
            <p className="title"> Product Images </p>
            <div className="img-cont">
              {data?.productImages?.map((i) => (
                <img
                  src={i.image}
                  alt=""
                  className="centerImage"
                  key={`image ${i._id}`}
                />
              ))}
            </div>
          </div>
        )}
        {ValueChecker(data?.name, "Product Name")}
        {ValueChecker(data?.description, "Description")}
        {ValueChecker(data?.numOfReviews, "Number of Reviews")}
        {ValueChecker(data?.ingredients, "Ingredeints")}
        {ValueChecker(data?.brandId?.name, "Brand ")}
        {ValueChecker(data?.nutritionId?.name, "Nutrition ")}
        {ValueChecker(data?.skinTypeId?.name, "Skin Type")}
        {ValueChecker(data?.productTypeId?.name, "Product Tyoe")}
        {ValueChecker(data?.skinConditionId?.name, "Skin Condition")}
        {ValueChecker(data?.numOfReviews, "Number of Reviews")}
        {ValueChecker(data?.returnPolicy, "Return Policy")}
        {ValueChecker(data?.acneType, "Acne Type")}
        {ValueChecker(data?.considerAcne, "Consider Acne")}

        <div className="Desc-Container">
          <p className="title"> Multiple Size </p>
          <p className="desc">
            {data?.multipleSize === true ? "Activated" : "Not Activated"}
          </p>
        </div>

        {data?.multipleSize === true ? (
          data?.sizePrice?.length > 0 && (
            <div className="Desc-Container">
              <p className="title"> Sizes </p>
              {data?.sizePrice?.map((i, index) => (
                <>
                  <p className="desc" key={`price ${index}`}>
                    {" "}
                    Price : {i?.price}{" "}
                  </p>
                  <p className="desc" key={`size ${index}`}>
                    {" "}
                    Size : {i?.size}{" "}
                  </p>
                  <p className="desc" key={`stock ${index}`}>
                    {" "}
                    stock : {i?.stock}{" "}
                  </p>
                </>
              ))}
            </div>
          )
        ) : (
          <>
            {ValueChecker(data?.price, "Price")}
            {ValueChecker(data?.stock, "In Stock")}
          </>
        )}

        {data?.keyIngredients?.length > 0 && (
          <div className="Desc-Container">
            <p className="title"> Key Ingredeints </p>
            {data?.keyIngredients?.map((i, index) => (
              <p className="desc" key={`keyIngredients ${index}`}>
                {" "}
                {i}{" "}
              </p>
            ))}
          </div>
        )}

        {data?.benfit?.length > 0 && (
          <div className="Desc-Container">
            <p className="title"> Benefits </p>
            {data?.benfit?.map((i, index) => (
              <p className="desc" key={`benefit ${index}`}>
                {" "}
                {i}{" "}
              </p>
            ))}
          </div>
        )}

        {data?.howTouse?.length > 0 && (
          <div className="Desc-Container">
            <p className="title"> How to use </p>
            {data?.howTouse?.map((i, index) => (
              <>
                <p className="desc" key={`step ${index}`}>
                  {i?.step}{" "}
                </p>
                <p className="desc" key={`use ${index}`}>
                  Description : {i?.description}{" "}
                </p>
              </>
            ))}
          </div>
        )}

        {ValueChecker(data?.createdAt?.slice(0, 10), "Created At")}

        <Link to="/Product">
          <Button variant="dark">Back</Button>
        </Link>
      </section>
    </>
  );
};

export default HOC(SingleProduct);
