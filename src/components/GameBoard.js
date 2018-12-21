import React, { Component } from 'react'

import GameSquare from './GameSquare'
import {Row} from 'reactstrap'


class GameBoard extends Component {

  render() {
    
    const styles = {
      height: '92vh',
      backgroundColor: 'green',
    }
    const board = this.props.board
    if(!board) {
      return (<div>Loading...</div>)
    }
    return (
      <div style={styles}>
        <Row style={{height: '33.3%'}}>
          <GameSquare id="tl" spot={board[0].tl}/>
          <GameSquare id="tm" spot={board[0].tm}/>
          <GameSquare id="tr" spot={board[0].tr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare id="ml" spot={board[0].ml}/>
          <GameSquare id="mm" spot={board[0].mm}/>
          <GameSquare id="mr" spot={board[0].mr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare id="bl" spot={board[0].bl}/>
          <GameSquare id="bm" spot={board[0].bm}/>
          <GameSquare id="br" spot={board[0].br}/>
        </Row>
      </div>
    )
  }
}

export default GameBoard