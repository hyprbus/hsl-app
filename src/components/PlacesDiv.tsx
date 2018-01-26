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

const PlacesDiv = styled(BareDiv) `
  width: 100%;
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default PlacesDiv;
