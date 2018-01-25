import * as React from "react";
import styled, { css } from "styled-components";
import { InterfacePlace } from "../types/types";
import Column from "./Column";
import Row from "./Row";

export interface IResultRowProps {
  data: string[];
  rowId: string;
  className?: string;
  selectable: boolean;
  selectedIds: string[];
  select?: (selectedIds: string[], place: InterfacePlace) => void;
}

// take a string[] and create a column for each field
const BareResultRow = (props: IResultRowProps) => {
  const columns: React.ReactNode[] = [];
  props.data.forEach((item, i) => {
    columns.push(
      <Column key={i} width="95%" align="left">
        {item}
      </Column>,
    );
  });
  // if a search row is already in my selected items, make it unclickable
  if (!props.selectable) {
    return (
      <Row className={props.className}>
        {columns}
      </Row>
    );
  } else {
    const newPlace: InterfacePlace = {
      address: props.data[1],
      code: props.data[2],
      customName: props.data[2] + " " + props.data[0],
      id: props.rowId,
      name: props.data[0],
    };
    return (
      <div onClick={() => props.select(props.selectedIds, newPlace)}>
        <Row className={props.className}>
          {columns}
        </Row>
      </div>
    );
  }
};

const ResultRow = styled(BareResultRow) `
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.textFont};
  margin: 0 0 .25em 0;
  font-style: normal;
  cursor: pointer;
  ${(props) => !props.selectable && css`
    font-style: italic;
    cursor: default;
    background-color: ${props.theme.notSelectableBackgroundColor};
  `}
`;

export default ResultRow;
