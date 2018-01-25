import * as React from "react";
import styled from "styled-components";
import { IArrival } from "../types/types";
import Button from "./Button";
import { InterfaceButton } from "./Button";
import Column from "./Column";
import Row from "./Row";

export interface InterfacePlaceProps {
  text: string;
  children?: React.ReactNode[];
  className?: string;
  onRemove?: () => void;
}

const BarePlace = (props: InterfacePlaceProps) =>
  <Row className={props.className}>
    <Column width="90%" align="left">
      <div>{props.text}</div>
    </Column>
    <Column width="10%" align="right">
      <Button action={props.onRemove} label="[X]" />
    </Column>
    {props.children}
  </Row>;

const Place = styled(BarePlace) `
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
  margin: .5em 0 .25em 0;
`;

export default Place;
