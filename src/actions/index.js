// STANDARD ACTIONS

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const add = (amount) => {
  return {
    type: 'ADD',
    payload: amount
  }
}

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

// THUNK ACTION CREATORS

export const incrementAsyncThunk = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000)
  }
}

export const incrementIfOddThunk = () => {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment());
  };
}

// SAGA ACTIONS (redux-saga just intercepts standard actions)

export const incrementSaga = () => {
  return {
    type: 'INCREMENT_SAGA'
  }
}

export const decrementSaga = () => {
  return {
    type: 'DECREMENT_SAGA'
  }
}

export const addSaga = (amount) => {
  return {
    type: 'ADD_SAGA',
    payload: amount
  }
}
