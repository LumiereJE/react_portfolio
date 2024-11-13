import React from "react";

const ExperienceItem = ({ job, date }) => {
  return (
    <>
      <p>{job}</p>
      <p>{date}</p>
    </>
  );
};

export default ExperienceItem;
