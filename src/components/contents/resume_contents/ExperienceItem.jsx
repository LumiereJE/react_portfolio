import React from "react";

const ExperienceItem = ({ job, date, works }) => {
  return (
    <>
      <p>{job}</p>
      <p>{date}</p>
      <p>{works}</p>
    </>
  );
};

export default ExperienceItem;
