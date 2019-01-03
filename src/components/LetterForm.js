import React, { Component } from 'react'
import {Button} from 'reactstrap'

class LetterForm extends Component {

  _onClick = (letter) => {
    this.props.editLetter(letter)
  }
  _onClickReset = ( ) => {
    this.props.firestore.collection('board').doc(this.props.board[0].id).set({
      id: this.props.board[0].id,
      bl: "",
      bm: "",
      br: "",
      cl: "",
      cm: "",
      cr: "",
      tl: "",
      tm: "",
      tr: "",
    })
  }


  render() {
    
    return (
      <div>
        <Button onClick={() => this._onClick('X')} color="primary">X</Button>
        <Button onClick={() => this._onClick('O')} color="primary">O</Button>
        <Button onClick={this._onClickReset} color="primary">Reset</Button>
      </div>
    )
  }
}

export default LetterForm