import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
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
  FaGlobeAfrica
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example"));
  return (
    <section className="contactContainer">
      <section className="container-fluid ">
        <div className="mb-5 mt-5 container d-flex justify-content-center">
          <aside className="col-md-6 p-3">
            <div className="">
              <h1 className="mb-5">Get in touch</h1>
              <big>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, nisi excepturi, quae mollitia assumenda neque
                accusamus dignissimos commodi saepe, voluptatibus ex quibusdam
                placeat asperiores ipsa recusandae alias consequatur? Libero,
                debitis!
              </big>
              <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <h4>Name</h4>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Enter your name"
                    />
                    <br />
                    {errors.name && (
                      <span className="text-danger">
                        Please enter your name
                      </span>
                    )}
                  </div>
                  <br />
                  <div className="">
                    <h4>Email</h4>
                    <input
                      {...register("email", { required: true })}
                      placeholder="Enter your email"
                    />
                    <br />

                    {errors.email && (
                      <span className="text-danger">
                        Please enter your email
                      </span>
                    )}
                  </div>
                  <br />
                  <div className="">
                    <h4>MESSAGE HERE</h4>
                    <textarea
                      name=""
                      id=""
                      cols="75"
                      rows="7"
                      placeholder="Leave a message here"
                    ></textarea>
                  </div>

                  <input className="submitBtn" type="submit" />
                </form>
              </div>
            </div>
          </aside>
          <aside className="col-md-6  border-start border-dark border-3 p-5  d-flex justify-content-center align-item-center">
            <address className="">
              <div className="pb-5">

                <div className="addressTitle">
                <h2><span className= "text-danger"><FaMapMarkerAlt/> </span>Address</h2>
                </div>
           
                
                    <p>Sylhet</p>
                    <p>Bangladesh</p>
                
              </div>
              <div className="pb-4">
              <div className="addressTitle">
                <h2><span className= "text-danger"><FaPhoneAlt/> </span>Phone</h2>
                </div>
                <big>01708648728</big>
                <br />
                <big>01778294965</big>
              </div>
              <div className=" pb-4">
              <div className="addressTitle">
                <h2><span className= "text-danger"><FaRegEnvelope/> </span>Email</h2>
                </div>
                <big>mdjewelrana6487@gmail.com</big>
              </div>
              <div className="">
              <div className="addressTitle">
                <h2><span className= "text-danger"><FaGlobe/> </span>Socials</h2>
                </div>
                <div className=" d-flex justify-content-center">
                  <div className="d-flex pr-0   w-100">
                    <a target = "_blank"href="https://github.com/jewelran">
                      {" "}
                      <div className="socialMedia">
                        <FaGithubSquare />
                      </div>
                    </a>
                    <a target = "_blank" href="https://www.facebook.com/profile.php?id=100008066828982">
                      <div className="socialMedia">
                        <FaFacebookSquare />
                      </div>
                    </a>
                   <a target = "_blank"href="https://twitter.com/Jewelra68822535">
                   <div className="socialMedia">
                      <FaTwitterSquare />
                    </div>
                   </a>
                 <div className="">
                 <a target = "_blank"href="https://www.instagram.com/jewelrana6609/">
                 <div className="socialMedia">
                      <FaInstagram />
                    </div>
                 </a>
                 </div>
                   <div className="">
                <a target = "_blank" href="https://www.linkedin.com/in/jewel-rana-531a01204/">
                <div className="socialMedia">
                      <FaLinkedin />
                    </div>
                </a>
                   </div>
                   <a target="_blank" href="https://jewelran.github.io/personal-portfolio/">
                   <div className="socialMedia">
                      <FaGlobe />
                    </div>
                   </a>
                  </div>
                </div>
              </div>
            </address>
          </aside>
        </div>
      </section>
    </section>
  );
};

export default Contact;
