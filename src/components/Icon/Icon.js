import React from "react";
import Bars from "./Hamburger";
import Close from "./Close";

const Icon = props => {
  switch (props.name) {
    case "burger":
      return <Bars {...props} />;
    case "close":
      return <Close {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
