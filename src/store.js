import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'


const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
    // reduxFirestore(),
    // reactReduxFirebase(fbConfig)
  )
);

export default store