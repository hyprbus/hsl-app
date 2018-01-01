import * as React from "react";
import styled from "styled-components";

export interface InterfaceHeaderProps {
  text: string;
  className?: string;
}

const BareHeader = (props: InterfaceHeaderProps) =>
  <h1
    className={props.className}
  >
    {props.text}
  </h1>;

const Header = styled(BareHeader)`
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
  font-size: 2.5em;
  text-decoration: underline;
`;

export default Header;
