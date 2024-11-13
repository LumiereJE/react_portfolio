import React from "react";

const SkillsItem = ({ skillName, score }) => {
  return (
    <>
      <div className="name_box">
        <p>{skillName}</p>
        <p>{score} %</p>
      </div>
      <div className="gauge_box">
        <div
          className="gauge_bar"
          style={{
            width: `${score}%`,
            "--score-value": `${score}%`,
          }}
        ></div>
      </div>
    </>
  );
};

export default SkillsItem;
