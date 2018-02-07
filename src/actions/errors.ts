import { ADD_ERROR, CLEAR_ERROR } from "../constants/constants";

export interface IAddError {
  errorMessage: string;
  type: ADD_ERROR;
}

export interface IClearError {
  type: CLEAR_ERROR;
}

export type ErrorAction = IAddError | IClearError;

export function addError(error: string): IAddError {
  return {
    errorMessage: error,
    type: ADD_ERROR
  };
}

export function clearError(): IClearError {
  return {
    type: CLEAR_ERROR
  };
}
