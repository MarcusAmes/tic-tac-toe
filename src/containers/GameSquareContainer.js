import { connect } from 'react-redux'
import GameSquare from '../components/GameSquare'
import {editBoard} from '../actions/boardAction'

const mapDispatchToProps = dispatch => {
  return {
    editBoard: (id, letter) => {
      dispatch(
        editBoard(id, letter)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(GameSquare)