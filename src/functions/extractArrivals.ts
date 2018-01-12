import { IArrival, IArrivalsData } from "../types/types";
// extract and generate arrival rows from returned data object
// data.stops[0-N].gtfsid								stopID, eg "HSL:1014013"
//  > data.stops.stoptimesForPatterns[0-N].pattern.name				patternName, eg "39B to Kamppi"
//  > data.stops.stoptimesForPatterns.pattern.stoptimes[0-N].scheduledArrival	scheduledArrival, eg "42300" = 11:45

export default function extractArrivals(data: IArrivalsData): IArrival[] {
  const arrivals: IArrival[] = [];
  data.data.stops.forEach((lineStop) => {
    const stopId = lineStop.gtfsId;
    lineStop.stoptimesForPatterns.forEach((line) => {
      const lineName = line.pattern.name;
      line.stoptimes.forEach((arrivalTime) => {
        arrivals.push({ stopId, patternName: lineName, scheduledArrival: arrivalTime.scheduledArrival });
      });
    });
  });
  return arrivals;
}
