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
    return (
      <div style={styles}>
        <Row style={{height: '33.3%'}}>
          <GameSquare spot={board.tl}/>
          <GameSquare spot={board.tm}/>
          <GameSquare spot={board.tr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare spot={board.ml}/>
          <GameSquare spot={board.mm}/>
          <GameSquare spot={board.mr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare spot={board.bl}/>
          <GameSquare spot={board.bm}/>
          <GameSquare spot={board.br}/>
        </Row>
      </div>
    )
  }
}

export default GameBoard