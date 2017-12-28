import { PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { InterfacePlace, InterfaceStoreState } from "../types/types";

export function placeReducer(state: InterfaceStoreState, action: PlaceAction): InterfaceStoreState {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: [...state.places, {
          id: action.id,
          name: action.name,
        }],
      };
    case DELETE_PLACE:
      const index = state.places.findIndex((x: InterfacePlace) => x.id === action.id);
      return {
        places: [
          ...state.places.slice(0, index),
          ...state.places.slice(index + 1),
        ],
      };
    default:
      return state;
  }
}
