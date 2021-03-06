import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import { InterfacePlace } from "../types/types";

export interface InterfaceAddPlace {
  place: InterfacePlace;
  type: constants.ADD_PLACE;
}

export interface InterfaceDeletePlace {
  id: string;
  type: constants.DELETE_PLACE;
}

export interface InterfaceSelectPlace {
  place: InterfacePlace;
  type: constants.SELECT_PLACE;
}

export type PlaceAction =
  | InterfaceAddPlace
  | InterfaceDeletePlace
  | InterfaceSelectPlace;

// tslint:disable-next-line:max-line-length
export function addPlace(place: InterfacePlace): InterfaceAddPlace {
  return {
    place,
    type: constants.ADD_PLACE
  };
}

export function deletePlace(id: string): InterfaceDeletePlace {
  return {
    id,
    type: constants.DELETE_PLACE
  };
}

export function selectPlace(place: InterfacePlace): InterfaceSelectPlace {
  return {
    place,
    type: constants.SELECT_PLACE
  };
}
