import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { addPlace } from "../actions/places";
import * as actions from "../actions/search";
import { InterfacePlace, InterfaceSearchParams, InterfaceSearchState } from "../types/types";
import SearchBox from "./SearchBox";

interface IDataMapper {
  mappings: object;
  results: object[];
  idKey: string;
}

type ISearchContainer = InterfaceSearchParams & IDataMapper;

// define which results object keys to display and their corresponding column names
const mapResults: object = {address: "Address", code: "Code", name: "Name"};

// which object key is the id key (required when selecting a result row and calling a callback function)
const idKey: string = "id";

const testStops: InterfacePlace[] = [
  {
    address: "Mannerheimintie 76",
    code: "0110",
    id: "HSL:1140439",
    name: "Töölön halli",
  },
  {
    address: "Kamppi 77",
    code: "1200",
    id: "HSL:123456",
    name: "Stranger Place",
  },
];
// tslint:disable-next-line:max-line-length
const mapStateToProps = ({ searchParams, foundStops = testStops, fetchingStops }: InterfaceSearchState): ISearchContainer => {
  return {
    fetchingStops,
    idKey,
    mappings: mapResults,
    // after debugging, change to results: foundStops
    results: testStops,
    searchParams,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SearchAction>) => {
  return {
    fetchResults: (searchString: string) => { dispatch(actions.fetchStops(searchString)); },
    selectResult: (id: string, name: string, address: string, customName?: string) => {
      dispatch(addPlace(id, name, address, customName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
