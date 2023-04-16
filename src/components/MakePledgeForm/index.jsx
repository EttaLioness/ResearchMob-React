import React, { useState } from "react";
import { useNavigate, useOutletContext, Link, useParams } from 'react-router-dom'; //hook that comes with React Router. This will allow us to use the browser’s History API.
import '../CreateProjectForm/createproject.css'

function MakePledgeForm() {
    // const { project } = props;
    const { id:projectId } = useParams();
    const [loggedIn] = useOutletContext();
    const navigate = useNavigate();
    
    const [pledgeData, setPledgeData] = useState({
    // default values 
        amount: "",
        comment: "",
        anonymous: false,
        project: "",
    });

    const handleChange = (event) => {    
        const { id, value } = event.target; 
        setPledgeData((prevpledgeData) => ({
            ...prevpledgeData,
            [id]: value,
            project: projectId
        }));
    };

    

    // const handleSubmit = (event) => {
    //     event.preventDefault(); //Dont send anything get, want to add logic
    
    //     {postData().then((response) => {
    //         // console.log(response)
    //         alert("Your Donation was successful")
    //         navigate(`/project/${projectId}`); //need to add errors
    //         })
    //     };
    // }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loggedIn) {
            try {
                if (pledgeData.amount && pledgeData.comment) {
                    postData().then((response) =>{
                        console.log(response);
                        alert("Your Donation was successful")
                        navigate(`/project/${projectId}`); 
                        // location.reload();
                    });                    
                } else {
                    return (alert("Please enter an amount and comment!"));
                }
            } catch (err) {
                console.error(err);
                alert(`Error: ${err.message}`);
            };
            
        } else {
            navigate(`/login`);
        }
    };

        const postData = async () => {
            const token = window.localStorage.getItem("token")
            const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${token}`
                },
                body: JSON.stringify(pledgeData)

            })
            return response.json();
            
        } 

    return(
    <section className="formMasterContainer">
        
        
        
    <form className="formBox"> 
    <div className="innerFormBox">
    <div>
            <h2>{pledgeData.project.title} Make Your Contribution</h2>
        </div>
        <div>
            <label htmlFor="amount">Amount You Want To Contribute</label>
            <input onChange={handleChange} type="number" id="amount" placeholder="Enter Dollar amount" required></input>
        </div>
        <div>
            <label htmlFor="comment">Add a Message to the Team       </label>
            <input onChange={handleChange} type="text" id="comment" placeholder="Enter Comment Here" ></input>
        </div>
        <div className="buttonContainer" >
            <button className="createButton" type="submit" onClick={handleSubmit} >Donate Now</button>
            <Link to={`/project/${pledgeData.id}` } className="createButton">Cancel</Link>
        </div>
    </div>
        
    </form>
    </section>
    )
};
export default MakePledgeForm;