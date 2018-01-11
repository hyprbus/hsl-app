import { connect, Dispatch } from "react-redux";
import * as arrivalActions from "../actions/arrivals";
import * as placeActions from "../actions/places";
import Places from "../components/Places";
import { InterfaceStoreState } from "../types/types";

const mapStateToProps = ({ fetchingArrivals, places }: InterfaceStoreState) => {
  return {
    fetchingArrivals,
    places,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<placeActions.PlaceAction>) => {
  return {
    fetchData: () => { dispatch(arrivalActions.fetchArrivals("currently hardcoded")); },
    onRemove: (id: string) => { dispatch(placeActions.deletePlace(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
