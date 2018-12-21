import React, { Component } from 'react';
import TopNav from './components/TopNav';
import GameBoard from './components/GameBoard';
import {Container} from 'reactstrap'
class App extends Component {

  render() {
    const styles = {
      height: '100vh',
      backgroundColor: 'grey'
    }
    return (
      <div style={styles} className="App">
        <TopNav />
        <Container>
          <GameBoard />
        </Container>
      </div>
    );
  }
}

export default App;
