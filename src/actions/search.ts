import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import extractStops from "../functions/extractStops";
import { generateSearchQuery } from "../functions/generateSearchQuery";
import { InterfacePlace } from "../types/types";
import { addError, clearError } from "./errors";

export interface InterfaceRequestStops {
  type: constants.FETCH_STOPS_REQUEST;
  searchParams: string;
}

export interface InterfaceFetchStops {
  searchParams: string;
  type: constants.FETCH_STOPS_REQUEST;
}

export interface InterfaceReceiveStops {
  foundStops: InterfacePlace[];
  type: constants.FETCH_STOPS_SUCCESS;
}

export interface InterfaceReceiveStopsFailed {
  type: constants.FETCH_STOPS_FAILURE;
}

export interface InterfaceSetSearchParams {
  searchParams: string;
  type: constants.SET_SEARCH_PARAMS;
}

export type SearchAction =
  | InterfaceRequestStops
  | InterfaceFetchStops
  | InterfaceReceiveStops
  | InterfaceReceiveStopsFailed
  | InterfaceSetSearchParams;

// request for stops
export function requestStops(params: string): InterfaceRequestStops {
  return {
    searchParams: params,
    type: constants.FETCH_STOPS_REQUEST
  };
}

// receive stops failed
export function receiveStopsFailed(): InterfaceReceiveStopsFailed {
  return {
    type: constants.FETCH_STOPS_FAILURE
  };
}

// receive stops
export function setStops(foundStops: InterfacePlace[]): InterfaceReceiveStops {
  return {
    foundStops,
    type: constants.FETCH_STOPS_SUCCESS
  };
}

// fetch arrivals from API
export function fetchStops(params: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(requestStops(params));
    return fetch(
      "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
      {
        body: JSON.stringify({ query: generateSearchQuery(params) }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      }
    ).then(
      response => {
        if (response.ok) {
          response.json().then(json => {
            dispatch(clearError());
            dispatch(setStops(extractStops(json)));
          });
        } else {
          dispatch(receiveStopsFailed());
          dispatch(addError(response.statusText));
        }
      },
      error => {
        dispatch(receiveStopsFailed());
        dispatch(addError(error.toString()));
      }
    );
  };
}

export function setSearchParams(searchParams: string) {
  return {
    searchParams,
    type: constants.SET_SEARCH_PARAMS
  };
}
