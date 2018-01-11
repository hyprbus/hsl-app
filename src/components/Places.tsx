import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Place from "./Place";
import { InterfacePlaceProps } from "./Place";

export interface InterfacePlacesProps {
  className?: string;
  fetchingArrivals: boolean;
  places: InterfacePlace[];
  onRemove: (id: string) => void;
  fetchData: () => void;
}

export default class BarePlaces extends React.Component<InterfacePlacesProps, any> {
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    this.props.fetchData();
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
      return (
      <div
      className={this.props.className}
      >
        {list}
      </div>);
  }}
}

// export default styled(BarePlaces)`
//   font-size: 2em;
//   color: ${(props) => props.theme.textColor};
//   font-family: ${(props) => props.theme.textFont};
// `;
