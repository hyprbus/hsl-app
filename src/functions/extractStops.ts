import { InterfacePlace, IStopsSearch } from "../types/types";

export default function extractStops(data: IStopsSearch): InterfacePlace[] {
  const foundStops: InterfacePlace[] = [];
  data.data.stops.forEach((stop) => {
    foundStops.push({ id: stop.gtfsId, name: stop.name, address: stop.desc, code: stop.code });
  });
  return foundStops;
}
