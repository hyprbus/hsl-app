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

export type SearchAction = InterfaceRequestStops | InterfaceFetchStops | InterfaceReceiveStops;

// request for stops
export function requestStops(params: string): InterfaceRequestStops {
    return {
        searchParams: params,
        type: constants.FETCH_STOPS_REQUEST,
    };
}

// receive stops
export function receiveStops(foundStops: InterfacePlace[]): InterfaceReceiveStops {
    return {
        foundStops,
        type: constants.FETCH_STOPS_SUCCESS,
    };
}

// fetch arrivals from API
export function fetchStops(params: string) {
    return (dispatch: Dispatch<Action>) => {
        dispatch(requestStops(params));
        console.log("Fetching stops...");
        return fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    {
        body: JSON.stringify({ query: generateSearchQuery(params)}),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Found some stops", data);
        return extractStops(data);
      })
      .then((json) => {
        dispatch(receiveStops(json));
      });
      };
}
