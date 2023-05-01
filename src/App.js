import React, { Component } from 'react'
import Users from './components/users';
import Navbar from './components/navbar';
import menuData from './data/menus.json';
import "./App.css"



class App extends Component {

  render() {
    return (
      <>
        <Navbar data={menuData} />
        <Users />
      </>
    )
  }

}

export default App;
