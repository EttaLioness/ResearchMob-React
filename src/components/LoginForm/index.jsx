import React, { useState }from "react";
import { useNavigate }from 'react-router-dom'; 
//hook that comes with React Router. This will allow us to use the browser’s History API.

function LoginForm(){
const [ credentials, setCredentials ] = useState({
    username: '',
    password: '',
});

const [error, setErrors] = useState();



const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value
    }));
};

const navigate = useNavigate();
// console.log(credentials)

const handleSubmit = (event) => {
    event.preventDefault(); //Dont send anything get, want to add logic
    
    if (credentials.username && credentials.password) {
        postData().then((response) => {
            if (response.token){
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);
                navigate('/');
            } else {
                setErrors(Object.values(response)[0][0]);
            }
        });  
    }
};

const postData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });
    return response.json();
};

    return (
        <div>
            {error && <h1>{error}</h1>}
            <form> 
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        onChange={handleChange} 
                        type="text" id="username" 
                        placeholder="Enter username">
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        onChange={handleChange}     
                        type="password" 
                        id="password" 
                        placeholder="Password">
                    </input>
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
};

export default LoginForm;