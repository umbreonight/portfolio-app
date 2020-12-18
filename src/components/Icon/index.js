import React from "react";

const Icon = ({className="", name}) => {
  return (
    <i className={"icon " + className}>{name}</i>
  );
};

export default Icon;
