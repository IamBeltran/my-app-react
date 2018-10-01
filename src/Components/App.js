import React, { Component } from 'react';

//import './Global/css/App.css';

//Components
import Header   from './Global/Header';
import Content from './Global/Content';
import Footer   from './Global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;