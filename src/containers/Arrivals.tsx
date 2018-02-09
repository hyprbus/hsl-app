import * as React from "react";
import styled from "styled-components";
import Arrival from "../components/Arrival";
import dateToSeconds from "../functions/dateToSeconds";
import { IArrival } from "../types/types";

export interface InterfaceArrivalsDiv {
  arrivals: IArrival[];
  className?: string;
}

const BareArrivals = (props: InterfaceArrivalsDiv) => {
  const filteredArrivals: React.ReactNode[] = [];
  const d = new Date();
  const currentTime = dateToSeconds(d);
  props.arrivals.forEach(arrival => {
    const waitTime = (arrival.scheduledArrival - currentTime) / 60;
    // remove extra days (eg extra 24*60*60 seconds if upcoming arrival in next day)
    const friendlyTime = arrival.scheduledArrival % (24 * 60 * 60);
    const hrs: string = Math.floor(friendlyTime / 3600).toString();
    const mins: string = ((friendlyTime % 3600) / 60).toString();
    const timeStr: string =
      "00".substr(hrs.length) + hrs + ":" + "00".substr(mins.length) + mins;
    // only include pattern name before the first whitespace character
    const shortName = arrival.patternName.substr(
      0,
      arrival.patternName.search(/\s/)
    );
    const patternNumber: string =
      shortName.length > 0 ? shortName : arrival.patternName.substr(0, 10);
    filteredArrivals.push(
      <Arrival
        key={`${patternNumber} + ${arrival.scheduledArrival} +${Math.random()}`}
        headSign={arrival.headSign}
        patternName={patternNumber}
        arrivalTime={timeStr}
        waitTime={waitTime}
      />
    );
  });
  return <div className={props.className}>{filteredArrivals}</div>;
};

const Arrivals = styled(BareArrivals)`
  font-size: 1em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`;

export default Arrivals;
