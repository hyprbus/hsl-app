import { addPlace, PlaceAction } from "../actions/places";
import { ADD_PLACE, DELETE_PLACE } from "../constants/constants";
import { placeReducer } from "../reducers/placeReducer";
import { InterfacePlace, InterfacePlacesState } from "../types/types";

// see https://rjzaworski.com/2016/12/testing-typescript-with-jest

const initialState: InterfacePlace[] = [];
const testPlace = {id: "HSL:1011310", address: "Address", name: "Name", customName: "Custom Name"};
const place1: PlaceAction = addPlace(testPlace.id, testPlace.name, testPlace.address, testPlace.customName);

const bogusAction = {type: "FOO_BAR", id: "HSL:1011310", address: "Address", name: "Name", customName: "Custom Name"}

// add a new place:
// return current state of places plus new place

describe("Adding new places", () => {
  test("New place added to state", () => {
    expect(placeReducer([], place1)).toEqual([testPlace]);
  });
  test("Return default state if action not applicable", () => {
    expect(placeReducer([], bogusAction)).toEqual([]);
  });
});

// id identical to existing - where should ID come from?

// delete place: return state minus place
// place at end of array
// place in mid of array
// place at beginning of array
// unrecognized id

// return current state in case of unrecognized action type
