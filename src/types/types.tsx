export interface InterfacePlace {
  id: number;
  name: string;
}

export interface InterfaceStoreState {
  places: InterfacePlace[];
}

export interface InterfaceTestGraphQL {
  name: string;
  desc: string;
}
