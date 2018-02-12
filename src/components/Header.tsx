import * as React from "react";
import styled from "styled-components";

export interface InterfaceHeaderProps {
  text: string;
  className?: string;
}

const BareHeader = (props: InterfaceHeaderProps) => (
  <h1 tabIndex={0} className={props.className}>
    {props.text}
  </h1>
);

const Header = styled(BareHeader)`
  margin: 0 0 0.5em 0;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
  font-size: 1.78em;
  text-decoration: underline;
`;

export default Header;
