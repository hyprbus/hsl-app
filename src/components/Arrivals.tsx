import * as React from "react";
import styled from "styled-components";
import { IArrival } from "../types/types";
// import Arrival from "./Arrival";
// import { InterfaceArrivalProps } from "./Arrival";

export interface InterfaceArrivalsProps {
  className?: string;
  arrivals: IArrival[];
}

const BareArrivals = ( props: InterfaceArrivalsProps ) => {
  return (
  <div
   className={props.className}
  >
    {"Arrivals object:" + props.arrivals[0].patternName}
  </div>);
};

const Places = styled(BareArrivals)`
  font-size: 2em;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default Places;
