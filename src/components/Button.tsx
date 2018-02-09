import * as React from "react";
import styled from "styled-components";

export interface InterfaceButton {
  action?: () => void;
  className?: string;
  label: string;
  accented?: boolean;
  center?: boolean;
}

const BareButton = (props: InterfaceButton) => (
  <button className={props.className} onClick={props.action} tabIndex={0}>
    {props.label}
  </button>
);

const Button = styled(BareButton)`
  flex: 1;
  border: none;
  padding: 0;
  margin: 2px;
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
  text-align: ${props => (props.center ? "center" : "inherit")};
  cursor: pointer;
  color: ${props =>
    props.accented ? props.theme.invertedTextColor : props.theme.textColor};
  background-color: ${props =>
    props.accented
      ? props.theme.invertedBackgroundColor
      : props.theme.backgroundColor};
`;

export default Button;
