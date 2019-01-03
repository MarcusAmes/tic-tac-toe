import React, { Component } from 'react'
import {Button} from 'reactstrap'

class LetterForm extends Component {

  _onClick = (letter) => {
    this.props.editLetter(letter)
    this.props.firestore.collection('players').doc('BfV9M3bH7g9S8MsIRLNc').set({
      ...this.props.players[0],
      [letter]: true
    })
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
    this.props.firestore.collection('players').doc('BfV9M3bH7g9S8MsIRLNc').set({
      ...this.props.players[0],
      X: false,
      O: false
    })
  }


  render() {
    console.log(this.props);
    if (!this.props.players) {
      return <div>Loading..</div>
    }
    
    return (
      <div>
        {!this.props.players[0]['X'] && <Button onClick={() => this._onClick('X')} color="primary">X</Button>}
        {!this.props.players[0]['O'] && <Button onClick={() => this._onClick('O')} color="primary">O</Button>}
        <Button onClick={this._onClickReset} color="primary">Reset</Button>
      </div>
    )
  }
}

export default LetterForm