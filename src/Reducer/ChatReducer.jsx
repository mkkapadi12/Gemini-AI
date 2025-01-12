const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      const { name, value } = action.payload;

      return {
        ...state,
        input: value,
      };

    case "SET_LOADING":
      const { input } = state;
      return {
        ...state,
        isLoading: true,
        showResult: true,
        recentPrompt: input,
      };

    case "SET_RESULT_DATA":
      return {
        ...state,
        isLoading: false,
        showResult: true,
        input: "",
        resultData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
