import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Column from "./Column";
import Row from "./Row";

export interface IResultRowProps {
  data: string[];
  rowId: string;
  className?: string;
  select?: (id: string, name: string, address: string, customName?: string) => void;
}

// take a string[] and create a column for each field
const BareResultRow = (props: IResultRowProps) => {
  const columns: React.ReactNode[] = [];
  console.log("Result row", props.data, "ID: ", props.rowId);
  props.data.forEach((item) => {
    columns.push(
      <Column width="20%" align="left">
        <div>
          {item}
        </div>
      </Column>,
    );
  });
  return (
  <Row className={props.className}>
    <div onClick={() => props.select(props.rowId, props.data[0], props.data[1], props.data[0] + " " + props.data[2])}>
      {columns}
    </div>
  </Row>
  );
};

const ResultRow = styled(BareResultRow)`
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
  margin: 0 0 .25em 0;
`;

export default ResultRow;