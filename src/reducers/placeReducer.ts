import { PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { getCookie, setCookie } from "../functions/cookies";
import { InterfacePlace, InterfacePlacesState } from "../types/types";

// const testPlaces: InterfacePlace[] = [
//   { address: "Topeliuksenkatu 10", customName: "Makuuni => Kamppi", id: "HSL:1140105", name: "Linnankoskenkatu"},
//   { address: "Arabianranta", customName: "Katilta ja Vesalta", id: "HSL:1230407", name: "Arabianranta"},
//   { address: "Fredrikinkatu 65", customName: "Lasipalatsilta kotiin", id: "HSL:1040144", name: "Kamppi(M)"},
// ];

// setCookie("places", JSON.stringify(testPlaces), 180);

let initialPlaces: InterfacePlace[] = [];

const placesCookie: string = (getCookie("places"));
if (placesCookie.length > 1) {
  initialPlaces = JSON.parse(placesCookie);
}
export function placeReducer(state: InterfacePlace[] = initialPlaces, action: PlaceAction): InterfacePlace[] {
  switch (action.type) {
    case ADD_PLACE:
      return [
        ...state,
        action.place,
      ];
    case DELETE_PLACE:
      const index = state.findIndex((x: InterfacePlace) => x.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
}
