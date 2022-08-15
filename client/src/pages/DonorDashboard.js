// dashboard

import React from 'react';
import DonorPreview from "../components/DonorPreview"
import styled from 'styled-components';

const DonorDashboard = () => {

    //dummy data for now

    const donors = [
        {
            name: "Gail Edwards",
            streetNumber: "123",
            streetName: "Monkland",
            city: "Montreal",
            province: "Quebec",
            postalCode: "123456",
            email: "gail@gmail.com",
            profession: "teacher",
            artInterests: "painting",
            fundraiserAttended: "Paint for the Cure",
            donationAmount: "100",
        },
        {
            name: "Daniel Carreau",
            streetNumber: "123",
            streetName: "Sherbrooke",
            city: "Sherbrooke",
            province: "Quebec",
            postalCode: "98378",
            email: "daniel@gmail.com",
            profession: "taxman",
            artInterests: "sculpture",
            fundraiserAttended: "Paint for the Cure",
            donationAmount: "20",
        },
        {
            name: "Kristen Goodall",
            streetNumber: "2948",
            streetName: "Quality",
            city: "Vancouver",
            province: "British Colombia",
            postalCode: "hfhdslfds",
            email: "kristen@gmail.com",
            profession: "art student",
            artInterests: "sculpture",
            fundraiserAttended: "ArtMaGoo",
            donationAmount: "75",
        },
        {
            name: "Julian Cymbalista",
            streetNumber: "999",
            streetName: "Flatbush Avenue",
            city: "Montreal",
            province: "Quebec",
            postalCode: "h4h4h4",
            email: "julian@gmail.com",
            profession: "web designer",
            artInterests: "found art",
            fundraiserAttended: "Paint for the Cure",
            donationAmount: "50",
        },
        {
            name: "Kat Teller",
            streetNumber: "453",
            streetName: "Center Street",
            city: "Montreal",
            province: "Quebec",
            postalCode: "10000",
            email: "kat@gmail.com",
            profession: "therapist",
            artInterests: "painting",
            fundraiserAttended: "ArtMaGoo",
            donationAmount: "105"
        }   
    ]

    const uniqueFundraiser = [
        ...new Set(donors.map(({ fundraiserAttended }) => fundraiserAttended))
    ]



    return(
        <div> 
            <p>Donor Homepage</p>

            <div className="donorDashboard">
                <h1>Recent Donations</h1>
                <div classname="donationContainer">
                    {donors && uniqueFundraiser.map((uniqueFundraiser, fundraiserIndex) => (
                        <div key={fundraiserIndex}>
                            <h3>{uniqueFundraiser}</h3>
                            {donors.filter(donor => donor.fundraiserAttended === uniqueFundraiser)
                            .map((filteredDonor, _index) => (
                                <DonorPreview
                                id={_index}
                                donor={filteredDonor}
                                />                             
                                ))
                                }
                        </div>
                    ))}
                
            </div> 
        </div>
        
        
    </div>
    )}
    
    export default DonorDashboard;
