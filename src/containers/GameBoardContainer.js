import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import GameBoard from '../components/GameBoard'

const mapStateToProps = state => {
  return {
    board: state.firestore.ordered.board,
    letter: state.board.letter
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'board' }
  ])
)(GameBoard)