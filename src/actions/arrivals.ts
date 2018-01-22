import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import extractArrivals from "../functions/extractArrivals";
import { generateQuery } from "../functions/generateArrivalsQuery";
import { IArrival, InterfacePlace } from "../types/types";
import { addPlace } from "./places";

export interface InterfaceRequestArrivals {
    type: constants.FETCH_ARRIVALS_REQUEST;
}

export interface InterfaceFetchArrivals {
    query: string;
    type: constants.FETCH_ARRIVALS_REQUEST;
}

export interface InterfaceReceiveArrivals {
    arrivals: IArrival[];
    type: constants.FETCH_ARRIVALS_SUCCESS;
}

export type ArrivalAction = InterfaceRequestArrivals | InterfaceFetchArrivals | InterfaceReceiveArrivals;

// request for arrivals
export function requestArrivals(): InterfaceRequestArrivals {
    console.log("from requestArrivals");
    return {
        type: constants.FETCH_ARRIVALS_REQUEST,
    };
}

// receive arrivals
export function receiveArrivals(arrivals: IArrival[]): InterfaceReceiveArrivals {
    return {
        arrivals,
        type: constants.FETCH_ARRIVALS_SUCCESS,
    };
}

// fetch arrivals from API
export function fetchArrivals(params: string[], newPlace?: InterfacePlace) {
    const addANewPlace = newPlace == null ? false : true;
    const allPlaces = !addANewPlace ? params : [ ...params, newPlace.id];
    return (dispatch: Dispatch<Action>) => {
        dispatch(requestArrivals());
        return fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    {
        body: JSON.stringify({ query: generateQuery(allPlaces)}),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      .then((response) => response.json())
      .then((data) => {
        return extractArrivals(data);
      })
      .then((json) => {
        dispatch(receiveArrivals(json));
      })
      .then(() => {
          if (addANewPlace) { dispatch(addPlace(newPlace)); }
        });
      };
}
