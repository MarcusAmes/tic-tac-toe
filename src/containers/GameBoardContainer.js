import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import GameBoard from '../components/GameBoard'
import {fetchBoard} from '../actions/boardAction'

const mapStateToProps = state => {
  return {
    board: state.firestore.ordered.board
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBoard: () => {
      dispatch(
        fetchBoard()
      )
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'board' }
  ])
)(GameBoard)