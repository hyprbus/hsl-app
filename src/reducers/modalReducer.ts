import { ModalAction } from "../actions/modal";
import { HIDE_MODAL, SHOW_MODAL } from "../constants/constants";

export default function modalReducer(
  state: boolean = false,
  // tslint:disable-next-line:trailing-comma
  action: ModalAction
): boolean {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}
