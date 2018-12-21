import { combineReducers } from 'redux'
import boardReducer from './boardReducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  board: boardReducer,
  firestore: firestoreReducer
})

export default rootReducer