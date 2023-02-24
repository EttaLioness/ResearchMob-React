import React, { useState, useEffect} from "react"; {/* useEffect used in order to manage lifecycles() */}
// import { allProjects } from "../data"; {/*this is for hard coded Data-practice*/}
import ProjectCard from "../components/ProjectCard";


const categories = ["Engineering", "Chemistry","Biology","Mathematics", "Social Sciences", "Economic", "Data Science", "Computer Science", "Ecology","Physics", "Material Science","Earth Science","Education","Paleontology","Medicine", "Neuroscience", "Pschycology", "Anthropology", "Art and Design", "Political Science", "Astrophysics"]

function HomePage(){
const [projectList, setProjectList] = useState([]);
const [userList, setUserList] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`) //querying info from api listed in .env  and added the endpoint (project)
    .then((results) => {
        return results.json(); //turn it into object jason
    })
    .then((data) => {
        setProjectList(data)
    });
    // setProjectList(allProjects)
}, []); //dependency array I want this function to run everytime page loads

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users`) //querying info from api listed in .env  and added the endpoint (project)
    .then((results) => {
        return results.json(); //turn it into object jason
    })
    .then((data) => {
        setUserList(data)
    });
    // setProjectList(allProjects)
}, []); //dependency array I want this function to run everytime page loads

    return(
        
        <div>
            <div className="categoryContainer">
                {categories.map((category, key) => {
                    return <div> {category} </div>
                })}
            </div>
            <div>
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />
                    // <div key={key}>{projectData.title}</div>
                })}
            </div>
            {/* <div>
                {userList.map((userData, key) => {
                    return <ProjectCard key={key} usertData={userData} />
                })}
            </div>  */}
            {/* <div>{projectData.pledges.map((pledgeData, key) => {
                    return <li>{pledgeData.amount} </li>})}
            </div> */}
        </div>
    );
}

export default HomePage;