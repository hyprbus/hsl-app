export interface InterfacePlace {
  id: string;
  address: string;
  name: string;
  customName?: string;
}

export interface InterfacePlacesState {
  places: InterfacePlace[];
}

export interface IArrival {
  stopId: string;
  patternName: string;
  scheduledArrival: number;
}

export interface InterfaceArrivalsState {
  arrivals: IArrival[];
  fetchingArrivals: boolean;
}

export type InterfaceStoreState = InterfacePlacesState & InterfaceArrivalsState;
