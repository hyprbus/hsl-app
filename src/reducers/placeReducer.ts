import { PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { InterfaceStoreState } from "../types/types";

// functionality for adding place
// functionality for deleting place

export function placeReducer(state: InterfaceStoreState, action: PlaceAction): InterfaceStoreState {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: [...state.places, {
          id: action.id,
          name: action.name,
        }],
      };
    // fix the slicing to be based on id, not hard-coded assumptions about the array
    case DELETE_PLACE:
      return {
        places: [
          ...state.places.slice(0, action.id),
          ...state.places.slice(action.id + 1),
        ],
      };
    default:
      return state;
  }
}
