const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ADD':
      return state + action.payload
    default:
      return state
  }
}

export default counter
