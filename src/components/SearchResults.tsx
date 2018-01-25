import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Column from "./Column";
import ResultRow from "./ResultRow";
import Row from "./Row";

export interface ISearchResults {
  className?: string;
  idKeyName: string;
  results: object[];
  mappings: object;
  selectedIds: string[];
  select: (selectedIds: string[], place: InterfacePlace) => void;
}

interface IResultObject {
  [key: string]: string;
}
const BareResults = (props: ISearchResults) => {
  if (props.results == null) {
    return null;
  }
  const noOfResults = props.results.length;
  if (noOfResults < 1) {
    return <Div>No stops found.</Div>;
  }
  if (noOfResults > 8) {
    return <Div>{`${noOfResults} stops found.`}</Div>;
  }

  const headerRow: React.ReactNode[] = [];
  Object.values(props.mappings).forEach((headerName: string, index: number) => headerRow.push(
    <Column key={"headerCol" + index} width="90%" align="left">
      {headerName}
    </Column>));

  const resultRows: React.ReactNode[] = [];
  props.results.forEach((result: IResultObject) => {
    // get the value of the id field.
    // Example idKeyName = "myId", result = { myId: "abcd00", name: "foo"} => "abcd00"
    const rowId = result[props.idKeyName];
    // convert each result object into string[] and supply to ResultRow as data={[]}
    const resultData: string[] = [];
    for (const i in result) {
      if (result.hasOwnProperty(i) && i in props.mappings) {
        const val = result[i] == null ? "-" : result[i].toString();
        resultData.push(val);
      }
    }
    let rowIsSelectable = true;
    if (props.selectedIds.includes(rowId)) {
      rowIsSelectable = false;
    }
    resultRows.push(
      <ResultRow
        key={rowId}
        rowId={rowId}
        data={Object.values(resultData)}
        select={props.select}
        selectedIds={props.selectedIds}
        selectable={rowIsSelectable}
      />);
  });
  return (
    <Div className={props.className}>
      <Row>{headerRow}</Row>
      {resultRows}
    </Div>
  );
};

const Div = styled.div`
  width: 98%;
  position: absolute;
  padding: 1%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-family: ${(props) => props.theme.textFont};
`;

const SearchResults = styled(BareResults) `
  width: 98%;
`;

export default SearchResults;
