import * as React from "react";
import styled from "styled-components";
import Button from "./Button";
import { InterfaceButton } from "./Button";

export interface InterfacePlaceProps {
  text: string;
  className?: string;
  onRemove?: () => void;
}

export const BarePlace = (props: InterfacePlaceProps) =>
  <div className={props.className}>
    <Label>{props.text}</Label>
    <Button action={props.onRemove} label="[X]" />
  </div>;

const Label = styled.div`
  flex: 1;
  width: 75%;
`;

const Place = styled(BarePlace)`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default Place;
