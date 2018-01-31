import { InterfaceReceiveStopsFailed, SearchAction } from "../actions/search";
import {
  FETCH_STOPS_FAILURE,
  FETCH_STOPS_REQUEST,
  FETCH_STOPS_SUCCESS,
  SET_SEARCH_PARAMS,
  FETCH_ARRIVALS_FAILURE
} from "../constants/constants";
import { InterfacePlace } from "../types/types";

export function foundStopsReducer(
  state: InterfacePlace[] = null,
  action: SearchAction
): InterfacePlace[] {
  switch (action.type) {
    case FETCH_STOPS_SUCCESS:
      return action.foundStops;
    default:
      return state;
  }
}

export function stopErrorReducer(
  state: string = "",
  action: InterfaceReceiveStopsFailed
): string {
  switch (action.type) {
    case FETCH_STOPS_FAILURE:
      return action.stopError;
    default:
      return state;
  }
}

export function fetchingStopsReducer(
  state: boolean = false,
  action: SearchAction
): boolean {
  switch (action.type) {
    case FETCH_STOPS_REQUEST:
      return true;
    case FETCH_STOPS_SUCCESS:
      return false;
    case FETCH_STOPS_FAILURE:
      return false;
    default:
      return state;
  }
}

export function setSearchParamsReducer(
  state: string = "",
  action: SearchAction
): string {
  switch (action.type) {
    case SET_SEARCH_PARAMS:
      return action.searchParams;
    default:
      return state;
  }
}
