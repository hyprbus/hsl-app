import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import extractArrivals from "../functions/extractArrivals";
import { generateArrivalsQuery } from "../functions/generateArrivalsQuery";
import { IArrival, InterfacePlace } from "../types/types";
import { addPlace } from "./places";
import { setSearchParams, setStops } from "./search";

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

export type ArrivalAction =
  | InterfaceRequestArrivals
  | InterfaceFetchArrivals
  | InterfaceReceiveArrivals;

// request for arrivals
export function requestArrivals(): InterfaceRequestArrivals {
  return {
    type: constants.FETCH_ARRIVALS_REQUEST
  };
}

// receive arrivals
export function receiveArrivals(
  arrivals: IArrival[]
): InterfaceReceiveArrivals {
  return {
    arrivals,
    type: constants.FETCH_ARRIVALS_SUCCESS
  };
}

// fetch arrivals from API
export function fetchArrivals(params: string[], newPlace?: InterfacePlace) {
  const addANewPlace = newPlace == null ? false : true;
  const allPlaces = !addANewPlace ? params : [...params, newPlace.id];
  return (dispatch: Dispatch<Action>) => {
    dispatch(requestArrivals());
    return fetch(
      "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
      {
        body: JSON.stringify({ query: generateArrivalsQuery(allPlaces) }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      }
    )
      .then(response => response.json())
      .then(extractArrivals)
      .then(json => dispatch(receiveArrivals(json)))
      .then(() => {
        if (addANewPlace) {
          dispatch(setStops(null));
          dispatch(setSearchParams(""));
          dispatch(addPlace(newPlace));
        }
      });
  };
}
