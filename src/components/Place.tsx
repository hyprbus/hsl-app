import * as React from "react";
import styled from "styled-components";

export interface InterfacePlaceProps {
  text: string;
  className?: string;
  onRemove?: () => void;
}

export const BarePlace = (props: InterfacePlaceProps) =>
  <div
    className={props.className}
    onClick={props.onRemove}
  >
    {props.text}
  </div>;

const Place = styled(BarePlace)`
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default Place;
