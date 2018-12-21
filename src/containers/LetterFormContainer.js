import LetterForm from '../components/LetterForm'
import {editLetter} from '../actions/boardAction'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    editLetter: (letter) => {
      dispatch(
        editLetter(letter)
      )
    }
  }
}


export default connect(null, mapDispatchToProps)(LetterForm)