// perform data fetching on mount
// data gets put in state
// other components are rendered

import * as React from "react";
import { connect, Dispatch } from "react-redux";
import * as actions from "../actions/places";
import Places from "../components/Places";
import { InterfacePlacesState } from "../types/types";

const mapStateToProps = ({ places }: InterfacePlacesState) => {
  return {
    places,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.PlaceAction>) => {
  return {
    onRemove: (id: string) => { dispatch(actions.deletePlace(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
