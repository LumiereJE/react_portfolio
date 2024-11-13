import React from "react";

const EducationItem = ({ course, date }) => {
  return (
    <>
      <p>{course}</p>
      <p>{date}</p>
    </>
  );
};

export default EducationItem;
