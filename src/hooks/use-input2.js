// Using useReducer instead of useState
import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  let type = action.type;
  switch (type) {
    case "INPUT":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        ...state,
        isTouched: true,
      };
    case "RESET":
      return initialInputState;

    default:
      return state;
  }
};

const useInput2 = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  let valueIsValid = validateValue(inputState.value);
  let hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput2;
