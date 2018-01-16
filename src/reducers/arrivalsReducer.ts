import { ArrivalAction } from "../actions/arrivals";
import { FETCH_ARRIVALS_REQUEST, FETCH_ARRIVALS_SUCCESS } from "../constants/constants";
import dateToSeconds from "../functions/dateToSeconds";
import sortArray from "../functions/sortArray";
import { IArrival, InterfaceArrivalsState } from "../types/types";

const testArrivals: IArrival[] = [
  { stopId: "HSL:1140105", patternName: "39A", scheduledArrival: 42300 },
];

export function arrivalsReducer(state: IArrival[] = testArrivals, action: ArrivalAction): IArrival[] {
  switch (action.type) {
    case FETCH_ARRIVALS_SUCCESS:
    const d = new Date();
    const currentTime = dateToSeconds(d);
    // tslint:disable-next-line:max-line-length
    const filtered = action.arrivals.filter((a) => a.scheduledArrival > currentTime && a.scheduledArrival < (currentTime + 20 * 60));
    const sortedArrivals: IArrival[] = sortArray(filtered, "scheduledArrival");
    return sortedArrivals;
    default:
      return state;
  }
}

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
