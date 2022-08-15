//ticket card

import React from 'react';
import { Link } from 'react-router-dom';



const DonorPreview = ({ donor }) => {
    return(
        <div className="donorPreview">
            <Link to={'/donor/${donor.documentId}'} id="link">
            <h3>{donor.name}</h3>            
            <h3>{donor.city}</h3>
            <div className="lastDonationContainer">
            <h3>{donor.fundraiserAttended}</h3>
            <h3>{donor.donationAmount}$</h3>
            </div>
        </Link>


        </div>
    )
}

export default DonorPreview
