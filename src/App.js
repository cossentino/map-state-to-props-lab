import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput'
import Users from './components/Users';
import ConnectedUsers from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <Users users={this.props.users}/>
      </div>
    );
  }
}



export default App
