import React from "react";
import EditProjectForm from "../components/EditProjectForm";
import { useParams } from "react-router-dom";

function EditProjectPage(){
    const { id } = useParams();
    return <EditProjectForm id={id} /> 
};

export default EditProjectPage;