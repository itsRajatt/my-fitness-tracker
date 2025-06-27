import React from "react";
import HomeComponent from "../components/home/HomeComponent";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    // Handle the start button click
    console.log("Start button clicked");
    navigate("/exercises"); // Navigate to the exercises page
  };
  return (
    <div style={{ width: "100%" }}>
      <HomeComponent onStartClick={onStartClick} />
    </div>
  );
};

export default HomeContainer;
