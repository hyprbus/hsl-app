export interface InterfacePlace {
  id: string;
  address: string;
  name: string;
  customName?: string;
  // arrivals: IArrival[];
}

export interface InterfacePlacesState {
  places: InterfacePlace[];
}

export interface IArrival {
  stopId: string;
  patternName: string;
  scheduledArrival: number;
  [key: string]: string | number;
}

export interface InterfaceArrivalsState {
  arrivals: IArrival[];
  fetchingArrivals: boolean;
}

export type InterfaceStoreState = InterfacePlacesState & InterfaceArrivalsState;

// interfaces for arrivals data object received from server:

interface IScheduledArrival {
  scheduledArrival: number;
  testArg?: string;
}
interface IPattern {
  name: string;
}
interface IStoptimesForPatterns {
  pattern: IPattern;
  stoptimes: IScheduledArrival[];
}
interface IStops {
  desc: string;
  gtfsId: string;
  name: string;
  stoptimesForPatterns: IStoptimesForPatterns[];
}
export interface IArrivalsDataData {
  stops: IStops[];
}

export interface IArrivalsData {
  data: IArrivalsDataData;
}
