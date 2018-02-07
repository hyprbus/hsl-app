import { connect, Dispatch } from "react-redux";
import { clearError, IClearError } from "../actions/errors";
import Error from "../components/Error";
import { IError } from "../types/types";

const mapStateToProps = ({ errorMessage }: IError) => {
  return {
    error: errorMessage
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IClearError>) => {
  return {
    close: () => dispatch(clearError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
