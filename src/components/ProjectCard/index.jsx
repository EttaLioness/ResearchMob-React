// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './projectCard.css'


function ProjectCard(props){
    const { projectData } = props; 
    // const { userList } = props;
  

    // const owner = userList.find((user)=>user.id==projectData.owner);
    // console.log(owner)

    // Should had this logic done in backend with decorator 
    const percentageGoalReached = (projectData.total_amount_pledged / projectData.goal)*100
    const htmlpercentageGoalReached = percentageGoalReached?.toFixed(2)
    

    return (
            <div className="projectCardContainer">
                <Link to={`/project/${projectData.id}`}>
                    <img src={projectData.image}></img>
                    <h2 className="title">{projectData.title}</h2>
                    {/* <section className="userDetails">
                        <div className="imgContainer">
                            <img src={owner?.image} alt="" /> 
                        </div>
                        <div>
                            <h6>{owner?.first_name}{owner?.last_name}</h6>
                            <p>{owner?.affiliate}</p>
                        </div>
                    </section> */}
                    
                    {/* <div className="moneyValues">
                        <span>{projectData?.total_amount_pledged}</span>
                        <span>${projectData.goal}</span>
                    </div>
                    <div className="moneyText">
                        <span>Funded</span>
                        <span>Goal</span>
                    </div> */}
                    <p>{projectData.description}</p>
                </Link>
            </div>
    )
};

export default ProjectCard;