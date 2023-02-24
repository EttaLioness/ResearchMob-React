import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { oneProject } from "../data";


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

    // const percentagePledged = () => {
    //     result = {projectData.total_amount_pledged} / {projectData.goal}    
    //     return result
    // };
    
    const owner = userList.find((user)=>user.id==projectData.owner)
    console.log(owner)
    return(
        <div>
            <h2>{projectData.title}</h2>
            <img src={projectData.image}></img>
            <h2>{projectData.goal}</h2>
            <h2>{projectData.total_amount_pledged}</h2>
            <h4>{(projectData.total_amount_pledged / projectData.goal)*100}</h4>
            <h3>{`Created at: ${projectData.date_created}`}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <Link to='/makepledge'>
                <button>Fund This Project</button>
            </Link>
            <h3>Pledges</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return <li>{pledgeData.amount}</li>
                })}
            </ul>
            <h6>{owner?.first_name}</h6>
        </div>
    )
};

export default ProjectPage;