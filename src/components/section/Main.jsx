import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Main"
        defaultTitle="Jieun's Portfolio"
        // defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />
      <div className="main_box">
        <Aside />
        <main id="main" role="main">
          {props.children}
        </main>
      </div>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
