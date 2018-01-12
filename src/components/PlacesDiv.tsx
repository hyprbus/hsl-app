import * as React from "react";
import styled from "styled-components";

export interface InterfacePlacesDiv {
  className?: string;
  children?: React.ReactNode[];
}

const BareDiv = (props: InterfacePlacesDiv) => (
  <div className={props.className}>
    {props.children}
  </div>
);

const PlacesDiv = styled(BareDiv)`
  font-size: 2em;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default PlacesDiv;
