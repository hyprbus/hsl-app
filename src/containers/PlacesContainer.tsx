import { connect, Dispatch } from "react-redux";
import * as actions from "../actions/places";
import Places from "../components/Places";
import { InterfaceStoreState } from "../types/types";

const mapStateToProps = ({ places }: InterfaceStoreState) => {
  return {
    places,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.PlaceAction>) => {
  return {
    onRemove: (id: number) => { dispatch(actions.deletePlace(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
