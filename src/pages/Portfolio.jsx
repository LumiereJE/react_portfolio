import React from "react";
import Main from "../components/section/Main";
import SnipSlide from "../components/contents/portfolio_contents/SnipSlide";
import PortInfo from "../components/contents/portfolio_contents/PortInfo";

import { slideImg, pf_site, portfolioInfo } from "../data/portfolio";

const Portfolio = () => {
  return (
    <Main title="Jieun's Portfolio" discription="Portfolio">
      <section id="portfolio">
        <h2>Portfolio</h2>

        {slideImg.map((slide, index) => (
          <div className="slide_box" key={index}>
            <SnipSlide slide={slide} />
            {portfolioInfo[index] && (
              <PortInfo
                site={pf_site[index]}
                info={portfolioInfo[index]}
                key={[index]}
              />
            )}
          </div>
        ))}
      </section>
    </Main>
  );
};

export default Portfolio;
