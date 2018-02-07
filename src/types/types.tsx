export interface InterfacePlace {
  address: string;
  code?: string;
  customName?: string;
  id: string;
  name: string;
  [key: string]: string;
}

export interface InterfacePlacesState {
  places: InterfacePlace[];
}

export interface ISelectedPlace {
  selectedPlace: InterfacePlace;
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

export interface InterfaceSearchParams {
  fetchingStops: boolean;
  searchParams: string;
  selectedIds: string[];
}

export interface InterfaceSearchResults {
  foundStops: InterfacePlace[];
}

export interface IError {
  errorMessage: string;
}

interface IModalState {
  modalVisible: boolean;
}

export type InterfaceSearchState = InterfaceSearchParams &
  InterfaceSearchResults;

export type InterfaceStoreState = InterfacePlacesState &
  InterfaceArrivalsState &
  IError &
  InterfaceSearchState &
  IModalState &
  ISelectedPlace;

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

// interfaces for search data object received from server

interface IStop {
  gtfsId: string;
  name: string;
  code: string;
  desc: string;
}

interface IStopsData {
  stops: IStop[];
}

export interface IStopsSearch {
  data: IStopsData;
}
