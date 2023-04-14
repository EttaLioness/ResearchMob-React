import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../CreateProjectForm/createproject.css'

function CreateUserForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));

        console.log(event)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            credentials.username && credentials.email && credentials.password) {
            postData().then((response) => {
            window.localStorage.setItem("credentials", JSON.stringify(response.credentials));

                // window.localStorage.setItem("token", response.token);
                // ("credentials", response.credentials)
                console.log(credentials)
                navigate("/");
            })
        }
    };

    const postData = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    return (
        <section className="formMasterContainer">
        
        
        <form className="formBox"> 
            <div className="innerFormBox">
            
                <h1>Create Account</h1>
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
                <div class="singleButton">
                    <button type="submit" onClick={handleSubmit} className="createButton">Create Account</button>
                </div>
                </div>
            </form>
        </section>
    )
};

export default CreateUserForm;