import React, { useState }from "react";
import { useNavigate }from 'react-router-dom';
import { Link } from "react-router-dom";
import './createproject.css'

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

    const [error, setErrors] = useState();
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };
    
    
    const handleSubmit = (event) => {
        event.preventDefault(); //Dont send anything get, want to add logic
    
            postData().then((response) => {
                // console.log(response)
                if (response.detail == "Invalid token."){
                    alert('You have to be logged in to create a project')    
                    navigate('/login')
                    }
                // window.localStorage.setItem("token", response.token)
                else{
                    navigate(`/project/${response.id}`)};
                if (response.status >= 400){
                    setErrors(Object.values(response))
                }
            })  

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
        <section className="formMasterContainer">
        
        
        <form className="formBox"> 
            <div className="innerFormBox">

            <h2>Create A New Scientific Research Project</h2>
            <div>
            {error && <h1>{error}</h1>}
            </div>
            <div>
                <label htmlFor="category">Pick a Category:</label>
                <select id="category" onChange={handleChange}>
                    <option value=""> -----Select an Option-----  </option>
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
                <label htmlFor="title">Project Title</label>
                <input className="inputBlock" onChange={handleChange} type="text" id="title" placeholder="Enter a Project Title. Make sure it is catchy!" required></input>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input className="inputBlock" type="url" id="image" pattern="https://*" onChange={handleChange} placeholder="Enter project image URL." required/>
            </div>
            <div>
                <label htmlFor="goal">Goal amount to raise</label>
                <input className="inputBlock" onChange={handleChange} type="number" id="goal" placeholder="Enter amount you wish to raise." required></input>
            </div>
            <div>
                <label htmlFor="project_email">Project Contact Email</label>
                <input className="inputBlock" onChange={handleChange} type="email" id="project_email" placeholder="Enter a project email. This is an email your supporters could contact you. " required></input>
            </div>
            <div>
                <label htmlFor="description">Give a brief description of the scientific project</label>
                <textarea className="textareaClass" id="description" rows={15} cols={80} onChange={handleChange} placeholder="Please provide a description overview of your scientific project." required/>
            </div>
            <div>
                <label htmlFor="question_one">Provide a little detail on the context of this research?</label>
                <textarea onChange={handleChange} rows={15} cols={80} id="question_one" placeholder="Enter question response. " required></textarea>         
            </div>
            <div>
                <label htmlFor="question_two">How is the  project significance or innovative?</label>
                <textarea onChange={handleChange} rows={15} cols={80} id="question_two" placeholder="Enter question response. " required></textarea>
            </div>
            <div>
                <label htmlFor="question_three">What are the goals or objectives of the project?</label>
                <textarea onChange={handleChange} rows={15} cols={80} id="question_three" placeholder="Enter question response. " required></textarea>
            </div>
            <div className="buttonContainer">
                <button type="submit" onClick={handleSubmit} className="createButton" >Create Project</button>
                <Link to={'/'} className="createButton" > Cancel</Link>
            </div>
            
        </div>
        </form>
        </section>
    )
};

export default CreateProjectForm;