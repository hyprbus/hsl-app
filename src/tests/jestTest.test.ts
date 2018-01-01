import addNumber from "../components/jestTest";

describe("Adding to number", () => {
  test("Adding 1 to 5", () => {
    expect(addNumber(5)).toBe(6);
  });
});
