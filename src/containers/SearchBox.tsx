import * as React from "react";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";

export interface ISearchBoxProps {
  className?: string;
  fetchingStops: boolean;
  fetchResults: (searchString: string) => void;
  idKeyName: string;
  mappings: object;
  results: object[];
  selectResult: (id: string, name: string, address: string, customName?: string) => void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any) {
    const searchString: string = event.target.value;
    this.setState({searchString});
    if (searchString.length > 5 && !this.props.fetchingStops) {
      console.log("Time to search!");
      this.props.fetchResults(searchString);
    }
  }

  public render() {
    // create headers

    // filter results
    return (
      <div className={this.props.className}>
        <form>
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
          select={this.props.selectResult}
        />
      </div>
    );
  }
}
