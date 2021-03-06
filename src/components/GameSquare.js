import React, { Component } from 'react'
import { Col } from 'reactstrap'

class GameSquare extends Component {

  _onClick = () => {
    // console.log(this.props);
    
    this.props.firestore.collection('board').doc(this.props.board.id).set({
      ...this.props.board,
      [this.props.id]: this.props.letter
    });
  }

  render() {

    const styles = {
      col: {
        height: '100%',
        backgroundColor: 'red',
        border: '1px solid black'
      },
      spot: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10em'
      }
    }


    return (
      <Col onClick={this._onClick} style={styles.col}>
        <span style={styles.spot}>
          {this.props.spot.toUpperCase()}
        </span>
      </Col>
    )
  }
}

export default GameSquare