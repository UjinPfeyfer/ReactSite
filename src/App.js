import React, { Component } from 'react';
import './App.css';
import articles from './Artic'
import Articles from'./Articles.js'

class App extends Component {
    state = {
        reverted:false
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>react app</h1>
        </header>
        <p className="App-intro">
            <button className="Btn" onClick={this.revert}>Revert</button>
        </p>
          <div className="Articles">
          <Articles articles={this.state.reverted ? articles.slice().reverse():articles}/>
          </div>
      </div>
    );
  }
  revert = () => {
        this.setState({
          reverted: !this.state.reverted
      })
  }
}

export default App;
