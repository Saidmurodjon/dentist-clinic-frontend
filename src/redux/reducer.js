const intialState = { value: 1, name: "saidmurod" };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};
// console.log();

export default reducer;
