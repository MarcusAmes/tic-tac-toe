import LetterForm from '../components/LetterForm'
import {editLetter} from '../actions/boardAction'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


const mapDispatchToProps = dispatch => {
  return {
    editLetter: (letter) => {
      dispatch(
        editLetter(letter)
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    board: state.firestore.ordered.board
  }
}

// export default connect(null, mapDispatchToProps)(LetterForm)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'board'
  }])
)(LetterForm)