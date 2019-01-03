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
    let winCheck = {}
    for (let key in board[0]) {
      if (winCheck[key.substring(0, 1)]) {
        if (winCheck[key.substring(0, 1)].letter === board[0][key] && board[0][key].length) {         
          winCheck[key.substring(0,1)] = {...winCheck[key.substring(0,1)], num: winCheck[key.substring(0,1)].num += 1}
          console.log(winCheck);
          
        }
      } else {
        if (board[0][key].length) {
          winCheck[key.substring(0, 1)] = { letter: board[0][key], num: 1 }
        }
      }
      if (winCheck[key.substring(1, 2)]) {
        if (winCheck[key.substring(1, 2)].letter === board[0][key] && board[0][key].length) {
          winCheck[key.substring(1,2)] = {...winCheck[key.substring(1,2)], num: winCheck[key.substring(1,2)].num += 1}
        }
      } else {
        if (board[0][key].length) {
          winCheck[key.substring(1, 2)] = { letter: board[0][key], num: 1 }
        }
      }
    }
    if (board[0].cm.length && ((board[0].tl === board[0].cm && board[0].cm === board[0].br) || (board[0].tr === board[0].cm && board[0].cm === board[0].bl))) {
      return <div>{board[0].cm} Wins!</div>
    }
    for(let key in winCheck) {
      if(winCheck[key].num === 3){
        return <div>{winCheck[key].letter} Wins!</div>
      }
    }
    
    
    return (
      <div style={styles}>
        <Row style={{height: '33.3%'}}>
          <GameSquareContainer letter={this.props.letter} id="tl" spot={board[0].tl}/>
          <GameSquareContainer letter={this.props.letter} id="tm" spot={board[0].tm}/>
          <GameSquareContainer letter={this.props.letter} id="tr" spot={board[0].tr}/>
        </Row>
        <Row style={{height: '33.3%'}}>
          <GameSquareContainer letter={this.props.letter} id="cl" spot={board[0].cl}/>
          <GameSquareContainer letter={this.props.letter} id="cm" spot={board[0].cm}/>
          <GameSquareContainer letter={this.props.letter} id="cr" spot={board[0].cr}/>
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