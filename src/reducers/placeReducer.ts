import { PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { InterfacePlace, InterfacePlacesState } from "../types/types";

const testPlaces: InterfacePlace[] = [
  { id: "HSL:1140105", address: "Topeliuksenkatu 10", name: "Linnankoskenkatu", customName: "Taka-Töölö"},
  { id: "HSL:1230407", address: "Arabianranta", name: "Arabianranta", customName: "Lindqvistit"},
  { id: "HSL:1040144", address: "Fredrikinkatu 65", name: "Kamppi(M)", customName: "Keskusta"},
];

export function placeReducer(state: InterfacePlace[] = testPlaces, action: PlaceAction): InterfacePlace[] {
  switch (action.type) {
    case ADD_PLACE:
      return [
        ...state,
        {
          address: action.address,
          customName: action.customName,
          id: action.id,
          name: action.name,
        },
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
