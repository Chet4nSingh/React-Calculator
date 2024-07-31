function evaluate({ currentOperand, previousOperand, operation }) {
  return "" + eval("" + previousOperand + operation + currentOperand);
}

export function reducer(state, action) {
  if (action.type === "ADD_DIGIT") {
    if (state.overwrite) {
      return {
        ...state,
        currentOperand: action.payload,
        overwrite: false,
      };
    }

    if (action.payload === 0 && state.currentOperand === "0") {
      return state;
    }

    if (action.payload === "." && state.currentOperand.includes("."))
      return state;

    return {
      ...state,
      currentOperand: `${state.currentOperand || ""}${action.payload}`,
    };
  } else if (action.type === "CLEAR") {
    return {
      currentOperand: "",
      previousOperand: "",
      operation: "",
    };
  } else if (action.type === "OPERATE") {
    if (state.currentOperand === "" && state.previousOperand === "") {
      return state;
    }
    if (state.currentOperand === "") {
      return state;
    }

    if (state.previousOperand === "") {
      return {
        ...state,
        operation: action.payload,
        previousOperand: state.currentOperand,
        currentOperand: "",
      };
    }

    return {
      ...state,
      operation: action.payload,
      previousOperand: evaluate(state),
      currentOperand: "",
    };
  } else if (action.type === "EQUAL") {
    if (state.currentOperand === "" || state.previousOperand === "") {
      return state;
    }
    return {
      ...state,
      overwrite: true,
      operation: "",
      previousOperand: "",
      currentOperand: evaluate(state),
    };
  } else if (action.type === "DELETE") {
    console.log(state);
    if (state.overwrite) {
      return {
        ...state,
        overwrite: false,
        currentOperand: "",
      };
    }

    if (state.currentOperand === "" && state.previousOperand !== "") {
      return {
        ...state,
        operation: "",
        previousOperand: "",
        currentOperand: state.previousOperand,
      };
    }

    if (state.currentOperand.length < 2) {
      return {
        ...state,
        currentOperand: "",
      };
    }

    return {
      ...state,
      currentOperand: state.currentOperand.slice(0, -1),
    };
  }
}
