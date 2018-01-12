// receive query + parameters
// return string
import arrayToString from "./arrayToString";

export const generateQuery = (parameters: string[]): string => {
  return `{
    stops(ids: [${arrayToString(parameters)}]) {
          name
      gtfsId
      desc
      stoptimesForPatterns {
        pattern {
          name
        }
        stoptimes {
          scheduledArrival
        }
      }
    }
  }`;
};
