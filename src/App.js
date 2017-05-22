import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Detail from './Detail.js'
import {BrowserRouter, Link, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    </div>
  )
}

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail </Link>
    </div>
  )
}

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      data: [1,2,3]
    }

  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render');
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/detail' component={(props) => <Detail {...props} data={this.state.data} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
