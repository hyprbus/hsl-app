import sortArray from "../functions/sortArray";
import { IArrival } from "../types/types";

const testArrivals: IArrival[] = [
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 42000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 41000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 41000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 40000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 43000 },
];

const result1: IArrival[] = [
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 40000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 41000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 41000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 42000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 43000 },
];

const result2: IArrival[] = [
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 40000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 41000 },
  { stopId: "HSL:1140100", patternName: "14", scheduledArrival: 42000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 41000 },
  { stopId: "HSL:1140104", patternName: "18", scheduledArrival: 43000 },
];

const sort1 = sortArray(testArrivals, "scheduledArrival");

describe("Sorting arrivals array", () => {
  test("Sort on arrival times", () => {
    expect(sort1).toEqual(result1);
  });
  test("Sort on stop IDs", () => {
    expect(sortArray(sort1, "stopId")).toEqual(result2);
  });
});
