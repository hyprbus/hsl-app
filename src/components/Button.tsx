import * as React from "react";
import styled from "styled-components";

export interface InterfaceButton {
  action?: () => void;
  className?: string;
  label: string;
}

const BareButton = (props: InterfaceButton) => (
  <div
    className={props.className}
    onClick={props.action}
  >
    {props.label}
  </div>
);

const Button = styled(BareButton) `
  flex: 1;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

export default Button;
