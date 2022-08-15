// Store requires strings for the backend

const STRINGS = {
    database: "ArtConnect",
    collections: {
        Donors: "Donors",
        Fundraisers: "Fundraisers",
    },
    endpoints:{
        Donors: "/api/Donors",
        Donors_id: "/api/Donors/:_id",
        Fundraisers: "/api/Fundraisers",
        Fundraisers_id: "/api/Fundraisers/:_id"
    },
};

module.exports = { STRINGS };