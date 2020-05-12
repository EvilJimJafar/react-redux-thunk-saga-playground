import { takeEvery, takeLatest, put, delay } from 'redux-saga/effects'

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' }) // hand off to the vanilla reducer
}

function* decrementAsync() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' }) // hand off to the vanilla reducer
}

function* addAsync(event) {
  yield delay(1000)
  yield put({ type: 'ADD', payload: event.payload }) // hand off to the vanilla reducer
}

export function* watchIncrement() {
  yield takeEvery('INCREMENT_SAGA', incrementAsync) // takeEvery means the user can spam the button causing many actions to be dispatched
}

export function* watchDecrement() {
  yield takeEvery('DECREMENT_SAGA', decrementAsync)
}

export function* watchAdd() {
  yield takeLatest('ADD_SAGA', addAsync) // takeLatest does a debounce :)
}
