import React, { useState, useEffect} from "react"; {/* useEffect used in order to manage lifecycles() */}
// import { allProjects } from "../data"; {/*this is for hard coded Data-practice*/}
import { Link } from 'react-router-dom';
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
        
        <>
            <section className="hero-Section">
                <div className="text-hero">
                    <h1>Be apart of the next</h1> 
                    <h1>scientific</h1>
                    <h1>breakthrough</h1>
                </div>
                <div className="heroButtons">
                    <li><a href="#allProjectContainer">Donate Now</a></li>
                    <li><Link to="/createproject">Start Your Research</Link></li>
                </div>
            </section>
            <main className="mainContainer">
                <section className="mainBox">
                    <div clasName="mainTitleBox"> 
                        <h2>What is ResearchMob?</h2>
                    </div>
                    <p>Researchmob is a crowdfunding platform enabling the community, industry and academia to contribute funding towards innovative scientific research.</p>
                </section>
                <section className="mainBox">
                    <div clasName="mainTitleBox"> 
                        <h2>Why crowdfund scientific research?</h2>
                    </div>
                    <p>Funds are directly distributed to the scientists conducting the research project, unlike receiving grands at a Universities where generally only 85-50% of total funds are received.</p>
                </section>
                <section className="mainBox">
                    <div clasName="mainTitleBox"> 
                        <h2>How does a donor benefit?</h2>
                    </div>
                    <p>Scientists share progress and results directly with donors and a final published scientific paper is supplied to them.</p>
                    <p>Donors also have the choice to be acknowledged in the publication ,of which are usually open-sourced or cited, thereby having a direct scientific impact that is shared with the world.</p>
                </section>
            </main>
            {/* <div className="categoryContainer">
                {categories.map((category, key) => {
                    return <div> {category} </div>
                })}
            </div> */}
            <section className="allProjectsContainer">
                <div className="farButtonContainer">
                    <h2>Featured Projects</h2>
                    <a href="#" >See All Projects</a>
                </div>
                <section>
                    <div className="allProjectSection">
                    {projectList.map((projectData, key) => {
                    if (key < 3)
                    return <ProjectCard key={key} projectData={projectData} />
                    // <div key={key}>{projectData.title}</div>
                })}
                    </div>
                </section>
                
            </section>
            
            {/* <div>
                {userList.map((userData, key) => {
                    return <ProjectCard key={key} usertData={userData} />
                })}
            </div>  */}
            {/* <div>{projectData.pledges.map((pledgeData, key) => {
                    return <li>{pledgeData.amount} </li>})}
            </div> */}
        </>
    );
}

export default HomePage;