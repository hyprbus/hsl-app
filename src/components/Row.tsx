import * as React from "react";
import styled from "styled-components";

export interface IRow {
  className?: string;
  children?: any;
}

const BareRow = (props: IRow) => {
  return <div className={props.className}>{props.children}</div>;
};

const Row = styled(BareRow)`
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`;

export default Row;
