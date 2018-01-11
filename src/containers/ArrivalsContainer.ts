import { connect } from "react-redux";
import * as actions from "../actions/arrivals";
import Arrivals from "../components/Arrivals";
import { InterfaceArrivalsState } from "../types/types";

const mapStateToProps = ({ arrivals, fetchingArrivals  }: InterfaceArrivalsState) => {
  return {
    arrivals,
  };
};

export default connect(mapStateToProps)(Arrivals);
