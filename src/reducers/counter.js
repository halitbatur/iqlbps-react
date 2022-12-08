const counter = (state = { counterValue: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counterValue: state.counterValue + 1 };
    case "DECREMENT":
      return { counterValue: state.counterValue - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { counterValue: state.counterValue + Number(action.payload) };
    default:
      return state;
  }
};

export default counter;
