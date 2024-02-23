import * as stikom from "@stikom-ui/react";
import IFrame from "./IFrame";
import React from "react";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  IFrame,
  ...stikom,
};

export default ReactLiveScope;
