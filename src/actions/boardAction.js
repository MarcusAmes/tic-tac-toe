

//ACTIONS

export const CHANGE_LETTER = 'CHANGE_LETTER'
const changeLetter = (letter) => ({ type: CHANGE_LETTER, letter: letter })



//THUNKS

export const editBoard = (id, letter) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    const state = getState()
    
    firestore.collection('board').doc(state.firestore.ordered.board[0].id).set({
      ...state.firestore.ordered.board[0],
      [id]: letter
    })
    
  }
}

export const editLetter = (letter) => dispatch => (
  dispatch(
    changeLetter(letter)
  )
)


