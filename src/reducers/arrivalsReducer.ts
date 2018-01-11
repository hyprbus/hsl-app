import { ArrivalAction } from "../actions/arrivals";
import { FETCH_ARRIVALS_REQUEST, FETCH_ARRIVALS_SUCCESS } from "../constants/constants";
import { IArrival, InterfaceArrivalsState } from "../types/types";

const testArrivals: IArrival[] = [
  { stopId: "HSL:1140105", patternName: "39A", scheduledArrival: 42300 },
];

// only set arrivals
export function arrivalsReducer(state: IArrival[] = testArrivals, action: ArrivalAction): IArrival[] {
  switch (action.type) {
    case FETCH_ARRIVALS_SUCCESS:
      return action.arrivals;
    default:
      return state;
  }
}

// only set flags
export function fetchingArrivalsReducer(state: boolean = false, action: ArrivalAction): boolean {
  switch (action.type) {
    case FETCH_ARRIVALS_REQUEST:
      return true;
    case FETCH_ARRIVALS_SUCCESS:
      return false;
    default:
      return state;
  }
}
