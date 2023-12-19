import React from "react";

const Section = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);

export default Section;