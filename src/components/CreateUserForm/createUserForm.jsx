import React, { useState } from 'react'
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import '../CreateProjectForm/createproject.css'

function CreateUserForm() {
    const authToken = window.localStorage.getItem("token")
    const [credentials, setCredentials] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        bio: '',
        qualifications: '',
        affiliate:''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));

        console.log(event)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
                }
            );
            if (!response.ok) {
                throw new Error(await response.text());
            }
            navigate(`/login`);
        } catch (err) {
            console.error(err);
            alert(`Error: ${err.message}`);
        }
    } else {
    
    navigate(`/`);
    }
    };


    return (
        <section className="formMasterContainer">
        
        
        <form className="formBox"> 
            <div className="innerFormBox">
            
                <h1>Create Account</h1>
                <div className='signUpField'>
                    <label htmlFor='first_name'>First Name</label>
                    <input type="text" id="first_name" placeholder="Enter your first name" onChange={handleChange}/>
                </div> 
                <div className='signUpField'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type="text" id="last_name" placeholder="Enter your last name" onChange={handleChange}/>
                </div> 
                <div className='signUpField'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" id="username" placeholder="Enter your username" onChange={handleChange}/>
                </div> 
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" placeholder="Enter your email" onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" placeholder="Enter a Password" onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor='bio'>Biography</label>
                    <input type="text" id="bio" placeholder="Enter a Biography or your purpose joining" onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor='qualifications'>Qualifications</label>
                    <input type="text" id="qualifications" placeholder="Enter your qualifications or type None" onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor='affiliate'>Affiliate</label>
                    <input type="text" id="affiliate" placeholder="Enter your affiliate University/Company or type None" onChange={handleChange} />
                </div>
                <div className="singleButton">
                    <button type="submit" onClick={handleSubmit} className="createButton">Create Account</button>
                </div>
                </div>
            </form>
        </section>
    )
};

export default CreateUserForm;