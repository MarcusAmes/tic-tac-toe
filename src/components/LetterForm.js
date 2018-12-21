import React, { Component } from 'react'
import {Button} from 'reactstrap'

class LetterForm extends Component {

  _onClick = (letter) => {
    this.props.editLetter(letter)
  }
  render() {
    
    return (
      <div>
        <Button onClick={() => this._onClick('X')} color="primary">X</Button>
        <Button onClick={() => this._onClick('O')} color="primary">O</Button>
      </div>
    )
  }
}

export default LetterForm