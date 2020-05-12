import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  add,
  signIn,
  signOut,
  incrementAsyncThunk,
  incrementIfOddThunk,
  incrementSaga,
  decrementSaga,
  addSaga
} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <p>You are { !isLoggedIn ? 'NOT' : '' } logged in</p>

      <hr/>

      <div>
        <h1>Standard redux</h1>
        <button onClick={() => dispatch(decrement())}>Increment</button>
        <button onClick={() => dispatch(increment())}>Decrement</button>
        <button onClick={() => dispatch(add(5))}>Add 5</button>

        {isLoggedIn ?
          <button onClick={() => dispatch(signOut())}>Log out</button>
          :
          <button onClick={() => dispatch(signIn())}>Log in</button>
        }
      </div>

      <div>
        <h1>redux-thunk</h1>
        <button onClick={() => dispatch(incrementAsyncThunk())}>Increment async</button>
        <button onClick={() => dispatch(incrementIfOddThunk())}>Increment if odd</button>
      </div>

      <div>
        <h1>redux-saga</h1>
        <button onClick={() => dispatch(incrementSaga())}>Increment async</button>
        <button onClick={() => dispatch(decrementSaga())}>Decrement async</button>
        <button onClick={() => dispatch(addSaga(4))}>Add 4 async debounced</button>
      </div>
    </div>
  );
}

export default App;
