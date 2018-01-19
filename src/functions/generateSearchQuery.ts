// receive query + parameters
// return string
import arrayToString from "./arrayToString";

export const generateSearchQuery = (parameter: string): string => {
  return `{
    stops(name: "${parameter}") {
      gtfsId
      desc
      code
      name
    }
  }`;
};
