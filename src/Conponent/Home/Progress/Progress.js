import React from "react";
import "./progress.css";
const Progress = () => {
  return (
    <div className="progressContainer d-flex justify-content-center">
      <div className="row container pb-5">
        <div className="">
          <h1 className="text-center pt-5 text-light  ">
            <span className="border-bottom pb-2 border-danger">
              MY SKILL HERE
            </span>
          </h1>
        </div>

        <aside className="col-md-6 ">
          <div className="">
            <h2 className="text-warning">ABOUT DESIGN</h2>
          </div>
          <div className="">
            <small className="text-left text-light">HTML5</small>
            <div class="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "99%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                99%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">CSS-3</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">SCSS</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">BOOTSTRAP</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">MATERIAL UI</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">REACT-BOOTSTRAP</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "88%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                88%
              </div>
            </div>
          </div>
        </aside>

        <aside className="col-md-6">
          <div className="">
            <h2 className="text-warning">ABOUT DEVELOPMENT</h2>
          </div>
          <div className="">
            <small className="text-left text-light">REACT JS</small>
            <div class="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "99%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                99%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">JAVASCRIPT</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">NODE JS</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">MONGODB</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">FIREBASE</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <small className="text-left text-light">NETLIFY</small>
            <div className="progress">
              <div
                class="progress-bar progress-bar-striped bg-dark"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Progress;
