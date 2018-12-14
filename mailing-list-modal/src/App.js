import React, { Component } from 'react'
import './App.css'
import MailingListModal from './components/MailingListModal'
require ('typeface-cormorant-upright')
class App extends Component {
  render() {
    return (
      <div className='App'>
      <MailingListModal/>
      </div>
    );
  }
}

export default App;
