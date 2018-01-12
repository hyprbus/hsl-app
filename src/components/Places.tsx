import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Place from "./Place";
import { InterfacePlaceProps } from "./Place";
import PlacesDiv from "./PlacesDiv";

export interface InterfacePlacesProps {
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
      return null;
    } else {
      const list: React.ReactNode[] = [];
      this.props.places.forEach((item) =>
        list.push(<Place
          key={item.id}
          text={item.name}
          onRemove={() => this.props.onRemove(item.id)}
        />),
      );
      return <PlacesDiv>{list}</PlacesDiv>;
  }}
}
