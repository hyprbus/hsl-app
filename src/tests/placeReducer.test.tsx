import { addPlace, PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { placeReducer } from "../reducers/placeReducer";
import { InterfacePlace, InterfacePlacesState } from "../types/types";

// see https://rjzaworski.com/2016/12/testing-typescript-with-jest

const initialState: InterfacePlace[] = [];
const place1: PlaceAction = addPlace(1, "First place");
const result1: InterfacePlacesState = placeReducer({places: initialState}, place1);

// add a new place:

// return current state of places plus new place

describe("Adding new places", () => {
  test("New place added to state", () => {
    expect(result1).toEqual({places: [{id: 1, name: "First place"}]});
  });
});

// id identical to existing - where should ID come from?

// delete place: return state minus place
// place at end of array
// place in mid of array
// place at beginning of array
// unrecognized id

// return current state in case of unrecognized action type
