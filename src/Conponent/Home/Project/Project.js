
import React from 'react';
import "./Project.css"
import image1 from"../../../images/image 4.png"
import image2 from"../../../images/image 5.png"
import image3 from"../../../images/image 8.png"
import ProjectDetails from '../ProdectDetails/ProjectDetails';
const Project = () => {
    const project = [
        {
            id: 1,
            title: "E-COMMERCE",
            description: "We provide Professional and affordable websites from a team you can trust",
            image: image1
        },
        {
            id: 1,
            title: "TRAVEL",
            description: "We provide Professional and affordable websites from a team you can trust",
            image:image2
        },
        {
            id: 1,
            title: "PORTFOLIO",
            description: "We provide Professional and affordable websites from a team you can trust",
            image:image3
        }
    ]
    return (
        <div className= "container-fluid ProjectContainer">
            <div className="row container-fluid" >
                <h1 className= "text-center text-secondary pt-5"><span className="border-bottom border-danger">LATEST WORK'S</span></h1>
                <div className="row container d-flex justify-content-center pt-5 mt-5 ">
                  
                   {
                        project.map(project => <ProjectDetails project = {project}></ProjectDetails>)
                    }
                 
                </div>
            </div>
        </div>
    );
};

export default Project;