import React, { Component } from 'react'
import Users from './components/users';
import Navbar from './components/navbar';
import menuData from './data/menus.json';
import users from './data/users.json';
import "./App.css"



class App extends Component {

  state = {
    users: users
  }

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    });
  }

  render() {
    return (
      <>
        <Navbar data={menuData} />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </>
    )
  }

}

export default App;
