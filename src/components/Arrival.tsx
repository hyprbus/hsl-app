import * as React from "react";
import styled from "styled-components";
import Column from "./Column";
import Row from "./Row";

export interface InterfaceArrivalsProps {
  className?: string;
  headSign: string;
  patternName: string;
  arrivalTime: string;
  waitTime: number;
}

const BareArrival = (props: InterfaceArrivalsProps) => {
  return (
    <Row className={props.className}>
      <Column width="20%" align="left">
        {`${props.waitTime}mins`}
      </Column>
      <Column width="20%" align="left">
        {props.patternName}
      </Column>
      <Column width="40%" align="left">
        {props.headSign}
      </Column>
      <Column width="20%" align="right">
        {props.arrivalTime}
      </Column>
    </Row>
  );
};

const Arrival = styled(BareArrival)`
  &:nth-child(even) {
    background-color: ${props => props.theme.alternateBackgroundColor};
  }
  font-size: 1em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`;

export default Arrival;
