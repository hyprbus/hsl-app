import * as React from "react";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";

export interface ISearchBoxProps {
  className?: string;
  idKey: string;
  mappings: object;
  results: object[];
  selectResult: (id: string, name: string, address: string, customName?: string) => void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    // create headers

    // filter results
    return (
      <div className={this.props.className}>
        <form><label>Find stops: </label><input type="text"></input></form>
        <SearchResults
          idKey={this.props.idKey}
          mappings={this.props.mappings}
          results={this.props.results}
          select={this.props.selectResult}
        />
      </div>
    );
  }
}
