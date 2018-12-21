//ACTIONS

export const GET_BOARD = "GET_BOARD"
const getBoard = () => ({ type: GET_BOARD })



//THUNKS

export const fetchBoard = dispatch => {
  dispatch(
    getBoard()
  )
}
