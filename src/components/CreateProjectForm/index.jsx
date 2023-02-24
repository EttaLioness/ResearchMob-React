import React, { useState }from "react";
import { useNavigate }from 'react-router-dom';

function CreateProjectForm(){
    const [ formData , setFormData ] = useState({
        title: '',
        description: '',
        goal: '',
        project_email: '',
        question_one: '',
        question_two: '',
        question_three: '',
        image: '',
        is_open: true,
        category: "Eng"
        
    });
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };
    
    const navigate = useNavigate();
    // console.log(credentials)
    
    const handleSubmit = (event) => {
        event.preventDefault(); //Dont send anything get, want to add logic
    
    
        // if(formData){
            postData().then((response) => {
                console.log(response)
                // window.localStorage.setItem("token", response.token)
                navigate(`/project/${response.id}`);
            })  
        // }
    }
    
    const postData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(formData)
        })
        return response.json();
        
    } 

    // console.log(formData)

    return (
        <form> 
            <div>
                <label htmlFor="title">Project Title:</label>
                <input onChange={handleChange} type="text" id="title" placeholder="Enter Project Title"></input>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" rows={20} cols={40} onChange={handleChange} placeholder="Enter a Description"/>
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="url" id="image" pattern="https://*" onChange={handleChange} placeholder="image"/>
            </div>
            <div>
                <label htmlFor="goal">Goal amount to raise:</label>
                <input onChange={handleChange} type="number" id="goal" placeholder="Enter amount"></input>
            </div>
            <div>
                <label htmlFor="category">Pick a Category:</label>
                <select id="category" onChange={handleChange}>
                    <option value="Eng">Engineering</option>
                    <option value="Chem">Chemistry</option>
                    <option value="Bio">Biology</option>
                    <option value="Math">Mathematics</option>
                    <option value="Social Sci">Social Sciences</option>
                    <option value="Ecom">Economics</option>
                    <option value="Data Sc">Data Science</option>
                    <option value="Ecology">Ecology</option>
                    <option value="Physics">Physics</option>
                    <option value="Materials Sc">Material Sciences</option>
                    <option value="Earth Sci">Earth Science</option>
                    <option value="Edu">Education</option>
                    <option value="Paleo">Paleontology</option>
                    <option value="Med">Medicine</option>
                    <option value="Neuro">Neuroscience</option>
                    <option value="Psych">Pschycology</option>
                    <option value="Anthropology">Anthropology</option>
                    <option value="Art and Design">Art and Design</option>
                    <option value="Political Sc">Political Science</option>
                    <option value="Paleo">Paleontology</option>
                    <option value="Astro">Astrophysics</option>
                </select>
            </div>
            <div>
                <label htmlFor="project_email">Project Contact Email:</label>
                <input onChange={handleChange} type="email" id="project_email" placeholder="Enter a project email "></input>
            </div>
            <div>
                <label htmlFor="question_one">What is the context of this research?</label>
                <input onChange={handleChange} type="text" id="question_one" placeholder="Enter question response "></input>
            </div>
            <div>
                <label htmlFor="question_two">What is the significance of this project?</label>
                <input onChange={handleChange} type="text" id="question_two" placeholder="Enter question response "></input>
            </div>
            <div>
                <label htmlFor="question_three">What are the goals of the project?</label>
                <input onChange={handleChange} type="text" id="question_three" placeholder="Enter question response "></input>
            </div>
            <button type="submit" onClick={handleSubmit} >Create Project</button>
        </form>
    )
};

export default CreateProjectForm;