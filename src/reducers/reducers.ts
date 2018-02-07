import { combineReducers, Reducer } from "redux";
import { InterfaceStoreState } from "../types/types";
import { arrivalsReducer, fetchingArrivalsReducer } from "./arrivalsReducer";
import { errorReducer } from "./errorReducer";
import modalReducer from "./modalReducer";
import { placeReducer, selectedPlaceReducer } from "./placeReducer";
import {
  fetchingStopsReducer,
  foundStopsReducer,
  setSearchParamsReducer
} from "./searchReducer";

const rootReducer: Reducer<InterfaceStoreState> = combineReducers({
  arrivals: arrivalsReducer,
  errorMessage: errorReducer,
  fetchingArrivals: fetchingArrivalsReducer,
  fetchingStops: fetchingStopsReducer,
  foundStops: foundStopsReducer,
  modalVisible: modalReducer,
  places: placeReducer,
  searchParams: setSearchParamsReducer,
  selectedPlace: selectedPlaceReducer
});

export default rootReducer;
