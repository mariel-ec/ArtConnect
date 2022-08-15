import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import brushlogo from "../images/brushlogo.png";

const DonorNav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logoContainer">
                <img className="logo" src={brushlogo} alt="paint brush logo" />
            </div>
      <div navButtons>
        <div Icon onClick={() => navigate("/")}>
          <p>Homepage</p>
        </div>
        <div Icon onClick={() => navigate("/dreport")}>
          <p>Donor Reports</p>
        </div>
        <div Icon onClick={() => navigate("/donor/:id")}>
          <p>Donor Edit</p>
        </div>
      </div>
    </nav>
  );
};

export default DonorNav;


