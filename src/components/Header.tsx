import * as React from "react";
import styled from "styled-components";

export interface InterfaceHeaderProps {
  text: string;
  textColor: string;
  className?: string;
}

export const BareHeader = (props: InterfaceHeaderProps) =>
  <h1
    className={props.className}
  >
    {props.text}
  </h1>;

const Header = styled(BareHeader)`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default Header;
