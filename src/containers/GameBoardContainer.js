import { connect } from 'react-redux'
import GameBoard from '../components/GameBoard'

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

export default connect(mapStateToProps)(GameBoard)