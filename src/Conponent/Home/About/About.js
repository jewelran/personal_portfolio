import React from "react";
import "./About.css";
import selfImage from "../../../images/jewel1.png";
import { FaDownload } from "react-icons/fa";
const About = () => {
  return (
    <section className="aboutContainer container-fluid pb-5">
      <section className=" row container-fluid ">
        <div className="pt-5 pb-5 d-flex justify-content-center">
          <h1 className="text-light border-bottom w-10 pb-2 border-warning  ">
            ABOUT ME
          </h1>
        </div>
        <div className=" rew container-fluid">
          <div className="d-flex mt-5">
            <aside className="col-md-6 ">
              <img className="w-75" src={selfImage} alt="" />
            </aside>
            <aside className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="p-5 border-right border-start border-5 border-warning">
                <h1 className="text-light mb-5">I am jewel rana</h1>
                <p className="text-secondary fs-4 ">
                  Junior front-end developer with 1+ years of experience
                  designing and building responsive web design. Proficient CSS
                  and JS Framework React js, with extensive knowledge of UI/UX
                  design and Development.
                </p>

                <a href="https://drive.google.com/drive/my-drive">
                  <button className="submitBtn">
                    {" "}
                    DOWNLOAD CV{" "}
                    <span className=" fs-2">
                      <FaDownload />
                    </span>
                  </button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
