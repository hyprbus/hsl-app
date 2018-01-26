import * as constants from "../constants/constants";

export interface IShowModal {
  type: constants.SHOW_MODAL;
}

export interface IHideModal {
  type: constants.HIDE_MODAL;
}

export type ModalAction = IShowModal | IHideModal;

export function showModal(): IShowModal {
  return {
    type: constants.SHOW_MODAL
  };
}

export function hideModal(): IHideModal {
  return {
    type: constants.HIDE_MODAL
  };
}
