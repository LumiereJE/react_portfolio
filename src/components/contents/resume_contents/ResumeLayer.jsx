import React from "react";

const ResumeLayer = ({ title, data, renderItem }) => {
  return (
    <div className="layer_box">
      <h4>{title}</h4>
      <div className="resume_info">
        {data.map((item, key) => (
          <div className="line_box" key={key}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeLayer;
