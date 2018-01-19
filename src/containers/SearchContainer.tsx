import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { addPlaceAndUpdate } from "../actions/places";
import * as actions from "../actions/search";
import { InterfacePlace, InterfaceSearchParams, InterfaceSearchState } from "../types/types";
import SearchBox from "./SearchBox";

interface IDataMapper {
  mappings: object;
  results: object[];
  idKeyName: string;
}

type ISearchContainer = InterfaceSearchParams & IDataMapper;

// define which results object keys to display and their corresponding column names
const mapResults: object = {address: "Address", code: "Code", name: "Name"};

// which object key is the id key (required when selecting a result row and calling a callback function)
const idKeyName: string = "id";

// tslint:disable-next-line:max-line-length
const mapStateToProps = ({ searchParams, foundStops, fetchingStops }: InterfaceSearchState): ISearchContainer => {
  return {
    fetchingStops,
    idKeyName,
    mappings: mapResults,
    // after debugging, change to results: foundStops
    results: foundStops,
    searchParams,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SearchAction>) => {
  return {
    fetchResults: (searchString: string) => { dispatch(actions.fetchStops(searchString)); },
    selectResult: (id: string, name: string, address: string, customName?: string) => {
      dispatch(addPlaceAndUpdate(id, name, address, customName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
