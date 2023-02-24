import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; //hook that comes with React Router. This will allow us to use the browser’s History API.

function MakePledgeForm() {

    //State
    const [pledgeData, setpledgeData] = useState({

    // default values 
        amount: "",
        comment: "",
        anonymous: false,
        project: "",
    });

    const handleChange = (event) => {
        const { id=project, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loggedIn = window.localStorage.getItem("token");
        if (loggedIn) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`,{
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Token ${loggedIn}`,
                        },
                    body: JSON.stringify(pledgeData),
                    });
                navigate("/");
            } 
            catch (err) {
                console.error(err);
            }
            } else {
            navigate(`/login`);
        };
    return(
    <form> 
        <div>
            <label htmlFor="title">Project Title:</label>
            <input type="text" id="title" readonly></input>
        </div>
    </form>
    )
}};
//     const handleSubmit = (event) => {
//         event.preventDefault(); //Dont send anything get, want to add logic
    
//             postData().then((response) => {
//                 console.log(response)
//                 // window.localStorage.setItem("token", response.token)
//                 navigate(`/project/${response.id}`);
//             })  
//     }
//     const postData = async () => {
//         const token = window.localStorage.getItem("token")
//         const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `token ${token}`
//             },
//             body: JSON.stringify(formData)
//         })
//         return response.json();
        
//     } 

//     // console.log(formData)

//     return(
//         <form> 
//             <div>
//                 <label htmlFor="title">Project Title:</label>
//                 <input type="text" id="title" readonly></input>
//             </div>
//         </form>

//     )
// };
export default MakePledgeForm;