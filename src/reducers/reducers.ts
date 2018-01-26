import { combineReducers, Reducer } from "redux";
import { ArrivalAction } from "../actions/arrivals";
import { PlaceAction } from "../actions/places";
import { SearchAction } from "../actions/search";
import { InterfaceStoreState } from "../types/types";
import { arrivalsReducer, fetchingArrivalsReducer } from "./arrivalsReducer";
import modalReducer from "./modalReducer";
import { placeReducer, selectedPlaceReducer } from "./placeReducer";
import {
  fetchingStopsReducer,
  foundStopsReducer,
  setSearchParamsReducer
} from "./searchReducer";

type Action = ArrivalAction | PlaceAction | SearchAction;

const rootReducer: Reducer<InterfaceStoreState> = combineReducers({
  arrivals: arrivalsReducer,
  fetchingArrivals: fetchingArrivalsReducer,
  fetchingStops: fetchingStopsReducer,
  foundStops: foundStopsReducer,
  modalVisible: modalReducer,
  places: placeReducer,
  searchParams: setSearchParamsReducer,
  selectedPlace: selectedPlaceReducer
});

export default rootReducer;
