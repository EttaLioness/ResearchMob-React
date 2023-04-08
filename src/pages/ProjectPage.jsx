import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
// import { oneProject } from "../data"; trialling with given data


function ProjectPage(){
    const [projectData, setProjectData ] = useState({ pledges : []});
    const { id } = useParams();
    const [userList,setUserList] = useState([])
    


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
    })
        .then((data) => {
            setProjectData(data)
        })

 
},[]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users`) //querying info from api listed in .env  and added the endpoint (project)
    .then((results) => {
        return results.json(); //turn it into object jason
    })
    .then((data) => {
        setUserList(data)
    });
    // setProjectList(allProjects)
}, []);

    
    const owner = userList.find((user)=>user.id==projectData.owner)
    console.log(owner)
    const percentageGoalReached = (projectData.total_amount_pledged / projectData.goal)*100
    const htmlpercentageGoalReached = percentageGoalReached.toFixed(2)
    const editProjectLink = `/EditProjectPage/${projectData.id}`
    // const OpenProject = () => {return (projectData.is_open) ? "Project Open" : "Project Closed"} Needs Editing
    return(
        <div className="projectContainer">
            <main className="projectPageMain">
                <h2>{projectData.title}</h2>
                <div className="projectUserBox">
                    <div>
                        <img src={owner?.image} alt="" />
                    </div>
                    <div className="userInfo">
                        <h4> By {owner?.first_name}</h4>
                        <h4>{owner?.last_name}</h4>
                        <p>{owner?.affiliate}</p>
                    </div>
                </div>
            </main>
            <section className="projectImgGoalContainer">
                <section className="projectImgGoalMini">
                    <img src={projectData.image}></img>
                </section>
                <section className="projectImgGoalMini goal">
                    
                    <h1>${projectData.total_amount_pledged} Funded</h1>
                    {/* <h2>This project is: {OpenProject}</h2> Needs Editing */}
                    <h2>Goal ${projectData.goal}</h2>
                    <h4>{`${htmlpercentageGoalReached}%`} Goal Reached</h4>
                    {/* <h3>{`Created at: ${projectData.date_created}`}</h3> */}
                    {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
                    <Link className="ProjectPageButton" to={`/project/${id}/makepledge`}>Fund This Project</Link>
                </section>
            </section>
            <section className="descriptionAnswers">
                <h2>About this Scientific Project</h2>
                <p>{projectData.description}</p>

                <h5>What is the context of this research?</h5>
                <p>{projectData.question_one}</p>

                <h5>What is the significance of this project?</h5>
                <p>{projectData.question_two}</p>

                <h5>What are the goals of the project?</h5>
                <p>{projectData.question_three}</p>
                <section className="projectPageMain">
                {/* <section className="supporterSectionContainer"> */}
                    <h3>People who have already pledged</h3>
                        {projectData.pledges.map((pledgeData, key) => {
                            // return <li>supporters (names): {pledgeData.supporter}</li>
                            const supporter = userList.find((user)=>user.id==pledgeData.supporter)
                            console.log("supporter", supporter)
                            return (<div key={key}> 
                            <section className="projectUserBox">
                                <div>
                                <img src={supporter?.image} alt="" />
                            </div>
                            <div className="userInfo supporterDetail">
                                <h4>{supporter?.username} </h4>
                                <p>${pledgeData.amount}</p>
                            </div>
                            </section>
                            
                            </div>
                            );
                        })}
                </section>
                
                <Link className="ProjectPageButton edit" to={editProjectLink} >Edit Project</Link>
            </section>
        </div>
    )
};

export default ProjectPage;