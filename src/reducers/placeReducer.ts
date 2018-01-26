import { PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE } from "../constants/constants";
import { getCookie, setCookie } from "../functions/cookies";
import { InterfacePlace, InterfacePlacesState } from "../types/types";

let initialPlaces: InterfacePlace[] = [];

const placesCookie: string = getCookie("places");
if (placesCookie.length > 1) {
  initialPlaces = JSON.parse(placesCookie);
}
export function placeReducer(
  state: InterfacePlace[] = initialPlaces,
  // tslint:disable-next-line:trailing-comma
  action: PlaceAction
): InterfacePlace[] {
  switch (action.type) {
    case ADD_PLACE:
      return [...state, action.place];
    case DELETE_PLACE:
      const index = state.findIndex((x: InterfacePlace) => x.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

export function selectedPlaceReducer(
  state: InterfacePlace = {
    address: "",
    code: "",
    customName: "",
    id: "",
    name: ""
  },
  action: PlaceAction
): InterfacePlace {
  switch (action.type) {
    case SELECT_PLACE:
      return action.place;
    default:
      return state;
  }
}
