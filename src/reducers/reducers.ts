import { combineReducers, Reducer } from "redux";
import { ArrivalAction } from "../actions/arrivals";
import { PlaceAction } from "../actions/places";
import { InterfaceStoreState } from "../types/types";
import { arrivalsReducer, fetchingArrivalsReducer } from "./arrivalsReducer";
import { placeReducer } from "./placeReducer";

type Action = ArrivalAction | PlaceAction;

const rootReducer: Reducer<InterfaceStoreState> = combineReducers({
  arrivals: arrivalsReducer,
  fetchingArrivals: fetchingArrivalsReducer,
  places: placeReducer,
});

export default rootReducer;
