import React from "react";
import "./TopHeader.css";
import selfImg from "../../../images/81668217_2563298910615645_5029881387696521216_n.jpg";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import facebook from "../../../icons/facebook-square-brands.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { AiFillFacebook } from "react-icons/fa";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaGlobeAfrica,
} from "react-icons/fa";
const TopHeader = () => {
  return (
    <section className="topHeaderContainer">
      <section className="row d-flex justify-content-center container-fluid pt-5">
        <div className="container d-flex align-item-center topWrapper">
          <aside className="col-md-6 headerTitle   d-flex justify-content-center align-items-center">
            <div className="asideTitle">
              <div className="text-center">
                <div className=" d-flex justify-content-center">
                  <div className="d-flex pr-0   w-35 mb-3">
                    <a target="_blank" href="https://github.com/jewelran">
                      {" "}
                      <div className="socialMedia fs-2">
                        <FaGithubSquare />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008066828982"
                    >
                      <div className="socialMedia fs-2">
                        <FaFacebookSquare />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://twitter.com/Jewelra68822535"
                    >
                      <div className="socialMedia fs-2">
                        <FaTwitterSquare />
                      </div>
                    </a>
                    <div className="">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/jewelrana6609/"
                      >
                        <div className="socialMedia fs-2">
                          <FaInstagram />
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jewel-rana-531a01204/"
                      >
                        <div className="socialMedia fs-2">
                          <FaLinkedin />
                        </div>
                      </a>
                    </div>
                    <a
                      target="_blank"
                      href="https://confident-heyrovsky-c8a58c.netlify.app/"
                    >
                      <div className="socialMedia fs-2">
                        <FaGlobe />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <h1 className="title text-danger text-center ">
                <span className="text-warning">Hello, I AM</span>{" "}
                <span>JEWEL RANA</span>
              </h1>
              <big className="text-secondary fs-2  ">
                <span className="text-light fs-1  typical ">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      " WEB DEVELOPER ",
                      1500,
                      "WEB DESIGNER",
                      1500,
                      "MARN STACK DEVELOPER",
                      1500,
                      "FULL STACK DEVELOPER",
                      1500,
                    ]}
                  ></Typical>{" "}
                </span>
              </big>
              <div className="mt-3 text-white fs-5">
                <p>
                  knack a building applications with front end back end
                  operations.
                </p>
              </div>
              <div className="mt-5 d-flex ">
                <Link to="/contact">
                  {" "}
                  <button style={{ width: "150px" }} className="submitBtn ">
                    Hire me
                  </button>
                </Link>

                <a href="https://drive.google.com/file/d/1Fs4AGruaG7y0PSHOGaGd-J2c6HqKOY_q/view">
                  {" "}
                  <button
                    style={{
                      width: "150px",
                      marginLeft: "25px",
                      backgroundColor: "#F3491F",
                      color: "white",
                    }}
                    className="submitBtn "
                  >
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </aside>
          <aside className="col-md-6 container  headerImgContainer ">
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
