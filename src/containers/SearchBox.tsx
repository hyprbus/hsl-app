import * as React from "react";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";
import { InterfacePlace } from "../types/types";

export interface ISearchBoxProps {
  className?: string;
  fetchingStops: boolean;
  fetchResults: (searchString: string) => void;
  idKeyName: string;
  mappings: object;
  results: object[];
  selectedIds: string[];
  selectResult: (selectedIds: string[], place: InterfacePlace) => void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const searchString: string = event.currentTarget.value;
    this.setState({searchString});
    if (searchString.length > 5 && !this.props.fetchingStops) {
      this.props.fetchResults(searchString);
    }
  }

  public render() {
    // filter results
    return (
      <div className={this.props.className}>
        <form onSubmit={(e) => { e.preventDefault(); }} >
          <label>
            Find stops:
          </label>
          <input type="text" onChange={this.handleChange}>
          </input>
        </form>
        <SearchResults
          idKeyName={this.props.idKeyName}
          mappings={this.props.mappings}
          results={this.props.results}
          selectedIds={this.props.selectedIds}
          select={this.props.selectResult}
        />
      </div>
    );
  }
}
