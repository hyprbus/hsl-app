import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import { IArrival } from "../types/types";

export interface InterfaceRequestArrivals {
    query: string;
    type: constants.FETCH_ARRIVALS_REQUEST;
}

export interface InterfaceReceiveArrivals {
    arrivals: IArrival[];
    type: constants.FETCH_ARRIVALS_SUCCESS;
}

export type ArrivalAction = InterfaceRequestArrivals | InterfaceReceiveArrivals;

// request for arrivals
export function requestArrivals(query: string): InterfaceRequestArrivals {
    console.log(query);
    return {
        query,
        type: constants.FETCH_ARRIVALS_REQUEST,
    };
}

// receive arrivals
export function receiveArrivals(arrivals: IArrival[]): InterfaceReceiveArrivals {
    console.log(arrivals);
    return {
        arrivals,
        type: constants.FETCH_ARRIVALS_SUCCESS,
    };
}

// fetch arrivals from API
export function fetchArrivals(query: string) {
    return (dispatch: Dispatch<Action>) => {
        dispatch(requestArrivals(query));
        console.log("Fetching arrivals.");
        return fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    {
        body: JSON.stringify({ query: '{ stops(ids: ["HSL:1140103"]) { name } }' }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      .then((response) => response.json())
      .then((json) => {
        // tslint:disable-next-line:no-console
        console.log(json);
        dispatch(receiveArrivals(json));
      });
      };
}
