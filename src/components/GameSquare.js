import React, { Component } from 'react'
import { Col } from 'reactstrap'

class GameSquare extends Component {
  render() {

    const styles = {
      height: '100%',
      backgroundColor: 'red',
      border: '1px solid black'
    }
    
    return (
      <Col style={styles}>
        {this.props.spot}
      </Col>
    )
  }
}

export default GameSquare