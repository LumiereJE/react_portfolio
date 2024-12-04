import React from "react";
import aboutImg from "../../../assets/img/aboutMeImg.jpg";

const AboutDetails = ({ about_me_data }) => {
  return (
    <div className="about_box">
      <h2>About me</h2>
      <img src={aboutImg} alt="about_img" />
      <div className="detail_box">
        {about_me_data.map((data, key) => (
          <p key={key}>{data.details}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutDetails;
