import React from "react";
import Main from "../components/section/Main";
import ScrollTopBtn from "../utils/ScrollTopBtn";

import AboutDetails from "../components/contents/about_contents/AboutDetails";
import { about_me_data } from "../data/about";

const AboutMe = () => {
  return (
    <Main title="Jieun's about me" discription="About me">
      <section id="about">
        <AboutDetails about_me_data={about_me_data} />
      </section>
      <ScrollTopBtn />
    </Main>
  );
};

export default AboutMe;
