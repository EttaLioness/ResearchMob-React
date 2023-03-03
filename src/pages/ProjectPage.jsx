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
    const percentageGoalReached =(projectData.total_amount_pledged / projectData.goal)*100
    const editProjectLink = `/EditProjectPage/${projectData.id}`
    return(
        <div>
            <h2>{projectData.title}</h2>
            <h4>{owner?.first_name}</h4>
            <img src={owner?.image} alt="" />
            <img src={projectData.image}></img>
            <h2>Goal {projectData.goal}</h2>
            <h2>{projectData.total_amount_pledged} Amount Pledged</h2>
            <h4>{`${percentageGoalReached}%`} Funded</h4>
            <h3>{`Created at: ${projectData.date_created}`}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <Link to={`/project/${id}/makepledge`}>
                <button>Fund This Project</button>
            </Link>

            <h2>{projectData.description}</h2>
            <h5>What is the context of this research?</h5>
            <p>{projectData.question_one}</p>

            <h5>What is the significance of this project?</h5>
            <p>{projectData.question_two}</p>

            <h5>What are the goals of the project?</h5>
            <p>{projectData.question_three}</p>

            <h3>Pledges</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    // return <li>supporters (names): {pledgeData.supporter}</li>
                    const supporter = userList.find((user)=>user.id==pledgeData.supporter)
                    console.log("supporter", supporter)
                    return (<li key={key}> 
                    <div>{pledgeData.amount} from {supporter?.username}</div>
                    <img src={supporter?.image} alt="" />
        
                    </li>
                

                        


                    );
                })}
            </ul>
            <Link to={editProjectLink} ><button>Edit Project</button></Link>
        </div>
    )
};

export default ProjectPage;