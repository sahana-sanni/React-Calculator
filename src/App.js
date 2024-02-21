import React, { Component } from 'react'
import Calc from './Pages/Calc'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Calc/>
      </div>
    )
  }
}
