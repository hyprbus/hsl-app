import { combineReducers, Reducer } from "redux";
import { ArrivalAction } from "../actions/arrivals";
import { PlaceAction } from "../actions/places";
import { SearchAction } from "../actions/search";
import { InterfaceStoreState } from "../types/types";
import { arrivalsReducer, fetchingArrivalsReducer } from "./arrivalsReducer";
import { placeReducer } from "./placeReducer";
import { fetchingStopsReducer, foundStopsReducer, setSearchParamsReducer } from "./searchReducer";

type Action = ArrivalAction | PlaceAction | SearchAction;

const rootReducer: Reducer<InterfaceStoreState> = combineReducers({
  arrivals: arrivalsReducer,
  fetchingArrivals: fetchingArrivalsReducer,
  fetchingStops: fetchingStopsReducer,
  foundStops: foundStopsReducer,
  places: placeReducer,
  searchParams: setSearchParamsReducer,
});

export default rootReducer;
