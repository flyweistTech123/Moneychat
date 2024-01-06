/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HOC = (Wcomponenet) => {

  return function Component() {
    const [hamb, setHamb] = useState(false);
    const [show,setShow]=useState(true);
    return (
      <>
        <div style={{ backgroundColor: "#f2f3f8" }}>
          <Navbar hamb={hamb} setHamb={setHamb} setShow={setShow} show={show}/>
        </div>

        <section className=" component_style">
          <Sidebar hamb={hamb} setHamb={setHamb} show={show} />
          <div className={show ? "child_component" : "child_component_full"} >
            {" "}
            <Wcomponenet />
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
