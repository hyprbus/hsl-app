import { connect, Dispatch } from "react-redux";
import { fetchArrivals } from "../actions/arrivals";
import * as modalActions from "../actions/modal";
import * as placeActions from "../actions/places";
import Modal from "../components/Modal";
import { InterfacePlace, InterfaceStoreState } from "../types/types";

const mapStateToProps = ({
  modalVisible,
  places,
  selectedPlace
}: InterfaceStoreState) => {
  return {
    inputDescription: "Place name (optional)",
    label: "Add place to list",
    ownName: "customName",
    selectedIds: places.map((p: InterfacePlace) => p.id),
    selectedPlace,
    visible: modalVisible
  };
};

const mapDispatchToProps = (dispatch: Dispatch<placeActions.PlaceAction>) => {
  return {
    approveModal: (currentStops: string[], place: InterfacePlace) =>
      dispatch(fetchArrivals(currentStops, place)),
    hideModal: () => dispatch(modalActions.hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
