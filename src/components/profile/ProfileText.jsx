import React from "react";

const ProfileText = ({ profileData }) => {
  return (
    <div className="profile_text_area">
      {profileData.map((mydata, key) => (
        <p className="mydata" key={key}>
          {mydata.category} :{" "}
          <a href={mydata.url} target="_blank" rel="noopener noreferrer">
            {mydata.text}
          </a>
        </p>
      ))}

      <div className="bottom_text">
        <p className="mini_bar">-</p>
        <p>"그래도 해야지 어떡해"</p>
      </div>
    </div>
  );
};

export default ProfileText;
