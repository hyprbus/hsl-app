import { fetchStops, InterfaceRequestStops, receiveStops, requestStops, SearchAction } from "../actions/search";
import { setSearchParamsReducer } from "../reducers/searchReducer";
// import { InterfacePlace, InterfaceSearchState } from "../types/types";

const action1 = requestStops("Kamppi");
const bogusAction = { type: "FOO_BAR", searchParams: "Bogus request" };
const result1: string = "Kamppi";

describe("Set search parameters reducer", () => {
  test("Add search parameter", () => {
    expect(setSearchParamsReducer("", action1)).toEqual("Kamppi");
  });
  test("Return provided state if action type does not match", () => {
    expect(setSearchParamsReducer("Some state", bogusAction)).toEqual("Some state");
  });
});
