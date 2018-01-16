import dateToSeconds from "../functions/dateToSeconds";

// 15:32 => 55920
const date1 = new Date("December 31, 2017 15:32:00");
const result1 = 55920;
// 00:00 => 0
const date2 = new Date("January 15, 2017 00:00:00");
const result2 = 0;

describe("Converting hours and minutes from a date into seconds", () => {
  test("Hours: 15:32", () => {
    expect(dateToSeconds(date1)).toEqual(result1);
  });
  test("Hours: 00:00", () => {
    expect(dateToSeconds(date2)).toEqual(result2);
  });
});
