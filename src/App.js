import React, { Component } from 'react'
import Users from './components/users';
import Navbar from './components/navbar';
import AddUser from './components/adduser';
import menuData from './data/menus.json';
import "./App.css"



class App extends Component {

  render() {
    return (
      <>
        <Navbar data={menuData} />
        <AddUser />
        <Users />
      </>
    )
  }

}

export default App;
