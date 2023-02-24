import React from "react";
import { Link } from "react-router-dom";
import './projectCard.css'

        // function PercentageAmount(){
        //     const { projectData } = props;
        //     const totalAmountPledged = {projectData.total_amount_pledged} 
        //     const goalAmount =  {projectData.goal}
        //     return (totalAmountPledged / goalAmount )*100
        // };


function ProjectCard(props){
    const { projectData } = props;
    
    

    return (
        <section className="projectCardSection">
            <div className="projectCardContainer">
                <Link to={`/project/${projectData.id}`}>
                    <img src={projectData.image}></img>
                    <h2>{projectData.title}</h2>
                    <p>{projectData.description}</p>
                    {/* <h4>({projectData.total_amount_pledged} / {projectData.goal})*100</h4> */}
                    <h4>{projectData.goal}</h4>
                </Link>
                {/* <Link to={`/users/${projectData.owner}`}>
                    <img src={userData.image} alt="Owner Avatar" />
                    <h4>{userData.first_name}</h4>
                    <h4>{userData.last_name}</h4>
                </Link> */}
            </div>
        </section>
    )
};

export default ProjectCard;