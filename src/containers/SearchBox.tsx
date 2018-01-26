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
  searchParams: string;
  searchStringMinLength: number;
  selectedIds: string[];
  selectResult: (place: InterfacePlace) => void;
  setSearchParams: (p: string) => void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const searchString: string = event.currentTarget.value;
    this.props.setSearchParams(searchString);
    if (
      searchString.length >= this.props.searchStringMinLength &&
      !this.props.fetchingStops
    ) {
      this.props.fetchResults(searchString);
    }
  }

  public render() {
    // filter results
    return (
      <Box className={this.props.className}>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <label>Find stops:</label>
          <Input
            type="text"
            onChange={this.handleChange}
            value={this.props.searchParams}
          />
        </Form>
        <SearchResults
          idKeyName={this.props.idKeyName}
          mappings={this.props.mappings}
          results={
            this.props.searchParams.length >= this.props.searchStringMinLength
              ? this.props.results
              : null
          }
          selectedIds={this.props.selectedIds}
          select={this.props.selectResult}
        />
      </Box>
    );
  }
}

const Input = styled.input`
  font-family: ${props => props.theme.textFont};
  padding: 2px;
  margin: 0 0 0 1em;
  border-width: 0 0 2px 0;
  border-color: #000;
  &:focus {
    background-color: ${props => props.theme.lightBackgroundColor};
    outline: none;
  }
`;

const Form = styled.form`
  font-family: ${props => props.theme.textFont};
  margin: 0 0 1em 0;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
`;
