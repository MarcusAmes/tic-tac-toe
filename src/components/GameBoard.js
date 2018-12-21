import React, { Component } from 'react'

import GameSquare from './GameSquare'
import {Row} from 'reactstrap'


class GameBoard extends Component {

  render() {
    const styles = {
      height: '92vh',
      backgroundColor: 'green',
    }
    
    return (
      <div style={styles}>
        <Row style={{height: '33.3%'}}>
          <GameSquare />
          <GameSquare />
          <GameSquare />
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare />
          <GameSquare />
          <GameSquare />
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquare />
          <GameSquare />
          <GameSquare />
        </Row>
      </div>
    )
  }
}

export default GameBoard