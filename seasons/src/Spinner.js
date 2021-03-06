import React from "react";
import { loadPartialConfig } from "@babel/core";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui active loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
