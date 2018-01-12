import arrayToString from "../functions/arrayToString";

// ["HSL:1140105", "HSL:1230407",  "HSL:1040144"] => '"HSL:1140105", "HSL:1230407",  "HSL:1040144"'

const array1 = ["HSL:1140105", "HSL:1230407",  "HSL:1040144"];
const result1 = '"HSL:1140105","HSL:1230407","HSL:1040144"';
const array2 = ["HSL:1140105"];
const result2 = '"HSL:1140105"';

describe("Converting array of arguments into GraphQL query compatible string", () => {
  test("Array of three arguments", () => {
    expect(arrayToString(array1)).toEqual(result1);
  });
  test("Array of one argument", () => {
    expect(arrayToString(array2)).toEqual(result2);
  });
  test("Single argument should return argument in quotes", () => {
    expect(arrayToString(7)).toEqual("7");
  });
});
