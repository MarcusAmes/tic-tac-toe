import { CHANGE_LETTER } from "../actions/boardAction";

const initState ={
  letter: ''
}

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LETTER:
      return {...state, letter: action.letter}
    default:
      return state;
  }
}

export default boardReducer