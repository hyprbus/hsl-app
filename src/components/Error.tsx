import * as React from "react";
import styled from "styled-components";
import Column from "./Column";
import Row from "./Row";

export interface IError {
  error: string;
  className?: string;
  close?: () => void;
}

const Error = (props: IError) => {
  if (props.error.length < 1) {
    return null;
  }
  return (
    <Row>
      <Column width="90%" align="left">
        <ErrMsg onClick={props.close}>{props.error}</ErrMsg>
      </Column>
      <Column width="10%" align="right">
        <ErrMsg onClick={props.close}>[X]</ErrMsg>
      </Column>
    </Row>
  );
};

const ErrMsg = styled.div`
  background-color: ${props => props.theme.errorBackgroundColor};
  font-family: ${props => props.theme.textFont};
  font-size: 0.8em;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  margin: 0.5em 0 0.25em 0;
`;

export default Error;
