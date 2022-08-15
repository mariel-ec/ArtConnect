//ticket page

import React from "react";
import { useState } from "react";


const DonorPage = () => {
    const [formData, setFormData] = useState({
        status: "not started"
    })
    const editMode = false;
    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const categories = ['test 1', 'test 2']

return(
    <div classname="donor">
        {/* <h1>
            if 
            {editMode = "Update Donor Info"
            } else {
                "Create a New Donor"}
        </h1> */}
<div className="donationContainer">
    <form onSubmit={handleChange}>
    <section>
        <h1>Update Donor Info</h1>
        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            require={true}
            value={formData.name}
            />
            <div className="addressContainer">
            <label htmlFor="streetNumber">Street Number</label>
        <input
            id="street number"
            name="street number"
            type="text"
            onChange={handleChange}
            require={true}
            value={formData.streetNumber}
            />
            <label htmlFor="streetName">Street Name</label>
            <input
                id="street name"
                name="street name"
                type="text"
                onChange={handleChange}
                require={true}
                value={formData.streetName}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={handleChange}
                    require={true}
                    value={formData.city}
                    />
                    <label htmlFor="province">Province</label>
                    <input
                        id="province"
                        name="province"
                        type="text"
                        onChange={handleChange}
                        require={true}
                        value={formData.province}
                        />
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            onChange={handleChange}
                            require={true}
                            value={formData.postalCode}
                            />
            </div>
            <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={handleChange}
                            require={true}
                            value={formData.email}
                            />
                            <label htmlFor="email">Profession</label>
                        <input
                            id="profession"
                            name="profession"
                            type="text"
                            onChange={handleChange}
                            require={true}
                            value={formData.profession}
                            />
            <label>Art Interest</label>
            <select 
                name="artInterest"
                value={formData.artInterest}
                onChange={handleChange}
                >
                    <option selected={formData.artInterest === ''} value=''></option>
                    <option selected={formData.artInterest === 'Painting'} value='Painting'>Painting</option>
                    <option selected={formData.artInterest === 'Watercolour'} value='Watercolour'>Watercolour</option>
                    <option selected={formData.artInterest === 'Found Items'} value='Found Items'>Found Items</option>
                    <option selected={formData.artInterest === 'Scultpture'} value='Sculpture'>Sculpture</option>
                    <option selected={formData.artInterest === 'Photography'} value='Photography'>Photography</option>
                    <option selected={formData.artInterest === 'Graphic Design'} value='Graphic Design'>Graphic Design</option>
                    <option selected={formData.artInterest === 'Multimedia'} value='Multimedia'>Multimedia</option>
                    <option selected={formData.artInterest === 'Printmaking'} value='Printmaking'>Printmaking</option>
                </select>
                <label htmlFor="email">Fundraiser Attended</label>
                        <input
                            id="fundraiserAttended"
                            name="fundraiserAttended"
                            type="text"
                            onChange={handleChange}
                            require={true}
                            value={formData.fundraiserAttended}
                            />
                            <label htmlFor="email">Donation Amount ($)</label>
                        <input
                            id="donationAmount"
                            name="donationAmount"
                            type="text"
                            onChange={handleChange}
                            require={true}
                            value={formData.donationAmount}
                            />
            
            <input type="submit" />
            

    </section>
   </form>

</div>
    </div>
    
    
    )




}

export default DonorPage
