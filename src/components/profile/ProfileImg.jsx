import React from "react";
import myImg from "../../assets/img/profileImg.jpg";

const ProfileImg = () => {
  return (
    <div className="profile_img_box">
      <img src={myImg} alt="profile_img" />
    </div>
  );
};

export default ProfileImg;
