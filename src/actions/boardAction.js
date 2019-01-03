import { getFirestore } from "redux-firestore";


//ACTIONS

export const CHANGE_LETTER = 'CHANGE_LETTER'
const changeLetter = (letter) => ({ type: CHANGE_LETTER, letter: letter })



//THUNKS

export const editBoard = (id, letter) => {
  return (dispatch, getState) => {
    const state = getState()
    console.log(state.firestore);
    
    
    // state.firestore.collection('board').doc(state.firestore.ordered.board[0].id).set({
    //   ...state.firestore.ordered.board[0],
    //   [id]: letter
    // })
    
  }
}

export const editLetter = (letter) => dispatch => (
  dispatch(
    changeLetter(letter)
  )
)


