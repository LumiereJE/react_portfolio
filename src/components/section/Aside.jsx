import React from "react";
import ProfileImg from "../profile/ProfileImg";
import ProfileText from "../profile/ProfileText";

import { profileData } from "../../data/profile";

const Aside = () => {
  return (
    <aside id="aside" role="banner">
      <ProfileImg />
      <ProfileText profileData={profileData} id="profile_text" />
    </aside>
  );
};

export default Aside;
