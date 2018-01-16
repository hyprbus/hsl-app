import { connect, Dispatch } from "react-redux";
import * as arrivalActions from "../actions/arrivals";
import * as placeActions from "../actions/places";
import Places from "../components/Places";
import { InterfaceStoreState } from "../types/types";

const mapStateToProps = ({ arrivals, fetchingArrivals, places }: InterfaceStoreState) => {
  return {
    arrivals,
    fetchingArrivals,
    places,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<placeActions.PlaceAction>) => {
  return {
    fetchData: (query: string[]) => { dispatch(arrivalActions.fetchArrivals(query)); },
    onRemove: (id: string) => { dispatch(placeActions.deletePlace(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
