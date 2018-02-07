import { ErrorAction } from "../actions/errors";
import { ADD_ERROR, CLEAR_ERROR } from "../constants/constants";
export function errorReducer(state: string = "", action: ErrorAction): string {
  switch (action.type) {
    case ADD_ERROR:
      return action.errorMessage;
    case CLEAR_ERROR:
      return "";
    default:
      return state;
  }
}
