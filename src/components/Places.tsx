import * as React from "react";
import styled from "styled-components";
import Arrivals from "../containers/Arrivals";
import { IArrival, InterfacePlace } from "../types/types";
import Place from "./Place";
import { InterfacePlaceProps } from "./Place";
import PlacesDiv from "./PlacesDiv";

export interface InterfacePlacesProps {
  arrivals: IArrival[];
  className?: string;
  fetchingArrivals: boolean;
  places: InterfacePlace[];
  onRemove: (id: string) => void;
  fetchData: (query: string[]) => void;
}

export default class BarePlaces extends React.Component<InterfacePlacesProps, any> {
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    const queryArr: string[] = [];
    this.props.places.forEach((e) => queryArr.push(e.id));
    this.props.fetchData(queryArr);
  }
  public render() {
    if (this.props.fetchingArrivals) {
      return <div>Fetching data...</div>;
    } else {
      const list: React.ReactNode[] = [];
      this.props.places.forEach((item) => {
        const arrivals = this.props.arrivals.filter((arrival) => arrival.stopId === item.id);
        list.push(<div key={`place + ${item.id}`} >
          <Place
            key={item.id}
            text={item.name}
            onRemove={() => this.props.onRemove(item.id)} />
          <Arrivals arrivals={arrivals.slice(0, 5)} />
        </div>);
      });
      return <PlacesDiv>{list}</PlacesDiv>;
  }}
}
