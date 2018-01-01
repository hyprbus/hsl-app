import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Place from "./Place";
import { InterfacePlaceProps } from "./Place";

export interface InterfacePlacesProps {
  className?: string;
  places: InterfacePlace[];
  onRemove: (id: number) => void;
}

const BarePlaces = ( props: InterfacePlacesProps ) => {
  const list: React.ReactNode[] = [];
  props.places.forEach((item) =>
    list.push(<Place
      key={item.id}
      text={item.name}
      onRemove={() => props.onRemove(item.id)}
    />),
  );
  return (
  <div
   className={props.className}
  >
    {list}
  </div>);
};

const Places = styled(BarePlaces)`
  font-size: 2em;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`;

export default Places;
