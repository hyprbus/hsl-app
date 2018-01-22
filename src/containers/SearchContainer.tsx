import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { fetchArrivals } from "../actions/arrivals";
import * as actions from "../actions/search";
import { InterfacePlace, InterfacePlacesState, InterfaceSearchParams, InterfaceSearchState } from "../types/types";
import SearchBox from "./SearchBox";

interface IDataMapper {
  mappings: object;
  selectedIds: string[]; // supply a list of the search results that have been previously selected
  results: object[];
  idKeyName: string;
}

type ISearchContainer = InterfaceSearchParams & IDataMapper;
type ISearchInputData = InterfacePlacesState & InterfaceSearchState;

// define which results object keys to display and their corresponding column names
const mapResults: object = {address: "Address", code: "Code", name: "Name"};

// which object key is the id key (required when selecting a result row and calling a callback function)
const idKeyName: string = "id";

// tslint:disable-next-line:max-line-length
const mapStateToProps = ({ places, searchParams, foundStops, fetchingStops }: ISearchInputData): ISearchContainer => {
  const selectedIds: string[] = [];
  places.forEach((stop) => selectedIds.push(stop.id.toString()));
  return {
    fetchingStops,
    idKeyName,
    mappings: mapResults,
    results: foundStops,
    searchParams,
    selectedIds,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SearchAction>) => {
  return {
    fetchResults: (searchString: string) => { dispatch(actions.fetchStops(searchString)); },
    selectResult: (currentStops: string[], place: InterfacePlace) => {
      dispatch(fetchArrivals(currentStops, place));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
