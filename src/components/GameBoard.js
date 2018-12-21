import React, { Component } from 'react'
import {Row} from 'reactstrap'
import GameSquareContainer from '../containers/GameSquareContainer';


class GameBoard extends Component {

  render() {
    
    const styles = {
      height: '85vh',
      backgroundColor: 'green',
    }
    const board = this.props.board
    if(!board) {
      return (<div>Loading...</div>)
    }
    return (
      <div style={styles}>
        <Row style={{height: '33.3%'}}>
          <GameSquareContainer letter={this.props.letter} id="tl" spot={board[0].tl}/>
          <GameSquareContainer letter={this.props.letter} id="tm" spot={board[0].tm}/>
          <GameSquareContainer letter={this.props.letter} id="tr" spot={board[0].tr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquareContainer letter={this.props.letter} id="ml" spot={board[0].ml}/>
          <GameSquareContainer letter={this.props.letter} id="mm" spot={board[0].mm}/>
          <GameSquareContainer letter={this.props.letter} id="mr" spot={board[0].mr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquareContainer letter={this.props.letter} id="bl" spot={board[0].bl}/>
          <GameSquareContainer letter={this.props.letter} id="bm" spot={board[0].bm}/>
          <GameSquareContainer letter={this.props.letter} id="br" spot={board[0].br}/>
        </Row>
      </div>
    )
  }
}

export default GameBoard