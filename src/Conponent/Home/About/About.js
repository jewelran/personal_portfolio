import React from 'react';
import "./About.css"
import selfImage from"../../../images/jewel1.png"
import { FaDownload } from "react-icons/fa";
const About = () => {
    return (
        <section className ="aboutContainer container-fluid pb-5">
            <section className= " row container-fluid ">
                <div className="pt-5 pb-5 d-flex justify-content-center">
                    <h1 className= "text-light border-bottom w-10 pb-2 border-warning  ">ABOUT ME</h1>
                </div>
                <div className=" rew container-fluid" >
                   <div className="d-flex mt-5">
                   <aside className = "col-md-6 ">
                        <img className= "w-75" src={ selfImage} alt="" />
                   </aside>
                   <aside className= "col-md-6 d-flex justify-content-center align-items-center">
                       <div className="p-5 border-right border-start border-5 border-warning">
                           <h1 className = "text-light mb-5">i am jewel rana</h1>
                           <p className= "text-secondary fs-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odit quisquam esse laborum temporibus illo totam et quis aliquam quasi, mollitia aliquid saepe maxime dolor sapiente nihil. Facere ab dolorem nisi at, explicabo amet maxime odit suscipit dolores, quidem molestiae animi perspiciatis. Temporibus, debitis! Quam, cupiditate quidem. Nesciunt, ut ea!</p>
                           <button className ="submitBtn">  DOWNLOAD CV <span className= " fs-2"><FaDownload/></span></button>
                       </div>

                   </aside>
                   </div>
                </div>
            </section>
        </section>
    );
};

export default About;