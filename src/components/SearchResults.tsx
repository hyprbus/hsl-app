import * as React from "react";
import styled from "styled-components";
import Column from "./Column";
import ResultRow from "./ResultRow";
import Row from "./Row";

export interface ISearchResults {
  className?: string;
  idKey: string;
  results: object[];
  mappings: object;
  select: (id: string, name: string, address: string, customName?: string) => void;
}

interface IResultObject {
  [key: string]: string | number;
}
const BareResults = (props: ISearchResults) => {
  const noOfResults = props.results.length;
  if (noOfResults < 1) {
    return null;
  }
  if (noOfResults > 10) {
    return <div>{noOfResults}</div>;
  }

  const headerRow: React.ReactNode[] = [];
  Object.values(props.mappings).forEach((headerName: string, index: number) => headerRow.push(
    <Column key={index} width="20%" align="left">
      {headerName}
    </Column>));

  const resultRows: React.ReactNode[] = [];
  props.results.forEach((result: IResultObject) => {
    // convert each result object into string[] and supply to ResultRow as data={[]}
    const resultData: string[] = [];
    for (const i in result) {
      if (result.hasOwnProperty(i) && i in props.mappings) {
        resultData.push(result[i].toString());
      }
     }
    resultRows.push(
    <ResultRow
      idKey={props.idKey}
      data={Object.values(resultData)}
      select={props.select}
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
