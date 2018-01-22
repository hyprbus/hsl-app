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
  const noOfResults = props.results.length;
  if (noOfResults < 1) {
    return <div>No stops found.</div>;
  }
  if (noOfResults > 8) {
    return <div>{`${noOfResults} stops found`}</div>;
  }

  const headerRow: React.ReactNode[] = [];
  Object.values(props.mappings).forEach((headerName: string, index: number) => headerRow.push(
    <Column key={index} width="20%" align="left">
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
        rowId={rowId}
        data={Object.values(resultData)}
        select={props.select}
        selectedIds={props.selectedIds}
        selectable={rowIsSelectable}
      />);
  });
  return (
  <div className={props.className}>
    <Row>{headerRow}</Row>
    {resultRows}
  </div>
  );
};

const SearchResults = styled(BareResults)`
  width: 100%;
`;

export default SearchResults;
