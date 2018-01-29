import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import extractStops from "../functions/extractStops";
import { generateSearchQuery } from "../functions/generateSearchQuery";
import { InterfacePlace } from "../types/types";

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
  stopError: string;
  type: constants.FETCH_STOPS_FAILURE;
}

export interface InterfaceSetSearchParams {
  searchParams: string;
  type: constants.SET_SEARCH_PARAMS;
}

// tslint:disable-next-line:max-line-length
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

// receive stops
export function setStopFetchError(error: string): InterfaceReceiveStopsFailed {
  return {
    stopError: error,
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
    )
      .then(response => response.json())
      .catch(error => {
        dispatch(setStopFetchError(error));
        console.log("Fetch error:", error);
      })
      .then(data => {
        return extractStops(data);
      })
      .then(json => {
        dispatch(setStops(json));
      });
  };
}

export function setSearchParams(searchParams: string) {
  return {
    searchParams,
    type: constants.SET_SEARCH_PARAMS
  };
}
