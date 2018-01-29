import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { showModal } from "../actions/modal";
import { selectPlace } from "../actions/places";
import * as actions from "../actions/search";
import {
  InterfacePlace,
  InterfacePlacesState,
  InterfaceSearchParams,
  InterfaceSearchState
} from "../types/types";
import SearchBox, { ISearchBoxProps } from "./SearchBox";

interface IDataMapper {
  error: string;
  mappings: object;
  searchStringMinLength: number;
  selectedIds: string[]; // supply a list of the search results that have been previously selected
  results: object[];
  idKeyName: string;
}

type ISearchContainer = InterfaceSearchParams & IDataMapper;
type ISearchInputData = InterfacePlacesState & InterfaceSearchState;

// define which results object keys to display and their corresponding column names
const mapResults: object = { name: "Name", address: "Address", code: "Code" };

// which object key is the id key (required when selecting a result row and calling a callback function)
const idKeyName: string = "id";

const mapStateToProps = ({
  places,
  searchParams,
  foundStops,
  fetchingStops,
  stopError
}: ISearchInputData): ISearchContainer => {
  const selectedIds: string[] = [];
  places.forEach(stop => selectedIds.push(stop.id.toString()));
  return {
    error: stopError,
    fetchingStops,
    idKeyName,
    mappings: mapResults,
    results: foundStops,
    searchParams,
    searchStringMinLength: 5,
    selectedIds
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SearchAction>) => {
  return {
    fetchResults: (searchString: string) =>
      dispatch(actions.fetchStops(searchString)),
    selectResult: (place: InterfacePlace) => {
      dispatch(showModal());
      dispatch(selectPlace(place));
    },
    setSearchParams: (p: string) => dispatch(actions.setSearchParams(p))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
