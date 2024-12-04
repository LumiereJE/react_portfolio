import React from "react";
import Main from "../components/section/Main";
import MainImg from "../components/contents/home_contents/MainImg";

const Home = () => {
  return (
    <Main
      title="Jieun's Portfolio"
      description="react로 만들어진 페이지 입니다."
    >
      <section id="home">
        <MainImg />
      </section>
    </Main>
  );
};

export default Home;
