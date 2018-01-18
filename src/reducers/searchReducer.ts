import { SearchAction } from "../actions/search";
import { FETCH_STOPS_REQUEST, FETCH_STOPS_SUCCESS } from "../constants/constants";
import { InterfacePlace } from "../types/types";

export function foundStopsReducer(state: InterfacePlace[] = [], action: SearchAction): InterfacePlace[] {
  switch (action.type) {
    case FETCH_STOPS_SUCCESS:
      return action.foundStops;
    default:
      return state;
  }
}

export function fetchingStopsReducer(state: boolean = false, action: SearchAction): boolean {
  switch (action.type) {
    case FETCH_STOPS_REQUEST:
      return true;
    case FETCH_STOPS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export function setSearchParamsReducer(state: string = "", action: SearchAction): string {
  switch (action.type) {
    case FETCH_STOPS_REQUEST:
      return action.searchParams;
    default:
      return state;
  }
}
