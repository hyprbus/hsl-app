import { IArrival } from "../types/types";

const sortArray = (arr: IArrival[], sortField: string): IArrival[] => {
  arr.sort((a, b) => {
    const prop1 = a[sortField].toString().toUpperCase(); // ignore upper and lowercase
    const prop2 = b[sortField].toString().toUpperCase(); // ignore upper and lowercase
    if (prop1 < prop2) {
      return -1;
    }
    if (prop1 > prop2) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return arr;
};

export default sortArray;
