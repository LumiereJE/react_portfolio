import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortInfo = ({ site, info }) => {
  return (
    <>
      <div className="info_box">
        <div className="title_box">
          <p>{info.pj_name}</p>
          <div className="more_box">
            <a href={site.site} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
              Link
            </a>
            <span>/</span>
            <a href={site.git} target="_blank" rel="noopener noreferrer">
              Git
            </a>
          </div>
        </div>
        <p>기간 : {info.pj_period}</p>
        <p>언어 : {info.language}</p>
        <p>기여도 : {info.contribution}</p>
        <p>-</p>
        <p>{info.description}</p>
      </div>
    </>
  );
};

export default PortInfo;
