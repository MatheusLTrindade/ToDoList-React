import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButttonClick = () => {
        navigate(-1);
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButttonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, incidunt dolorum. Accusantium, neque animi! Minima.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;