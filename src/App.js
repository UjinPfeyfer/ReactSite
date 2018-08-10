import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <button className="Btn" onClick={this.revert}>Revert</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div className="Articles">
              <h1>react app</h1>
          <Articles articles={this.state.reverted ? articles.slice().reverse():articles}/>
          </div>
      </div>
    );
  }
  revert=()=>{
        this.setState({
          reverted: !this.state.reverted
      })
  }
}

export default App;
