import React, { Component } from 'react';
import './App.css';
import MailingListModal from './components/MailingListModal';

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
