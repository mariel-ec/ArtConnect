
import React from "react-router-dom"
import DonorDashboard from "../pages/DonorDashboard";

const LocationDisplay = ({ location }) => {
    return(
        <div className="locationDisplay">
            <h2>{location}</h2>
        </div>
    );
};

export default  LocationDisplay