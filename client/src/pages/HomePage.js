//dashboard

import DonorPreview from "../components/DonorPreview";

const HomePage = () => {
    return(
        <div className="homepage">
            <h1> HOMEPAGE </h1>
            <div className="donation-container">
                <DonorPreview />
            </div>
        </div>


    );
};

export default HomePage;