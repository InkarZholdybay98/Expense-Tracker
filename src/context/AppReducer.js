export default (state, action) => {
  switch (action.type) {
    case "add_action":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "delete_action":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
