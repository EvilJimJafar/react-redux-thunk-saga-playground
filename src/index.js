import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { Provider } from 'react-redux'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// STORE
const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// Saga
sagaMiddleware.run(rootSaga)

// Subscribe to store changes and log them
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
