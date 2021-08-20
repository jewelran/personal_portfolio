import React from "react";
import "./TopHeader.css";
import selfImg from "../../../images/81668217_2563298910615645_5029881387696521216_n.jpg";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <section className="topHeaderContainer">
      <section className="row d-flex justify-content-center container-fluid pt-5">
        <div className="container d-flex align-item-center topWrapper">
          <aside className="col-md-6 headerTitle  d-flex justify-content-center align-items-center">
            <div className="">
              <h1 className="title text-danger ">
                <span className="text-warning">I AM</span>
                <br />
                <span>JEWEL RANA</span>
              </h1>
              <big className="text-secondary fs-2 ">
                <span className = "typicalSide">A PROFESSIONAL</span>{" "}
                <span className="text-light fs-4 typical ">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      " WEB DEVELOPER ",
                      1500,
                      "WEB DESIGNER",
                      1500,
                    ]}
                  ></Typical>{" "}
                </span>
              </big>
              <div className="mt-5">
                <Link to="/contact">
                  {" "}
                  <button className="submitBtn">Hire me</button>
                </Link>
              </div>
            </div>
          </aside>
          <aside className="col-md-6 container  ">
            <img className="w-75 p-5 rounded headerImg " src={selfImg} alt="" />
          </aside>
        </div>
      </section>
    </section>
  );
};

export default TopHeader;
<div className="row">
  <div className="col-md-6">
    <h1>hi i am jewel rana</h1>
  </div>
</div>;
