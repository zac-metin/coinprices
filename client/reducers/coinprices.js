function coinprices (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_COINPRICES':
      return action.coinprices
    default:
      return state
  }
}

export default coinprices
