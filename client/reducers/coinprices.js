function coinprices (state = [], action) {
  console.log(action.coinprices);
  switch (action.type) {
    case 'RECEIVE_COINPRICES':
      return [...action.coinprices]
    default:
      return state
  }
}

export default coinprices
