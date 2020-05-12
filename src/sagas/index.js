import * as counterSagas from './counter'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    counterSagas.watchAdd(),
    counterSagas.watchDecrement(),
    counterSagas.watchIncrement()
  ])
}
