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
  <div className={props.className} onClick={props.action}>
    {props.label}
  </div>
);

const Button = styled(BareButton)`
  flex: 1;
  margin: 2px;
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
