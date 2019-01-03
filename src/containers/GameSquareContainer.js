import { connect } from 'react-redux'
import GameSquare from '../components/GameSquare'
import {editBoard} from '../actions/boardAction'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const mapStateToProps = state => {
  return {
    board: state.firestore.ordered.board[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editBoard: (id, letter, set) => {
      dispatch(
        editBoard(id, letter, set)
      )
    }
  }
}

// export default connect(null, mapDispatchToProps)(GameSquare)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'board'
  }])
)(GameSquare)