import React, { Component } from 'react';
import TopNav from './components/TopNav';
import GameBoardContainer from './containers/GameBoardContainer';
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
          <GameBoardContainer />
        </Container>
      </div>
    );
  }
}

export default App;
