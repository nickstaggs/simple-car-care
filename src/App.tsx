import * as React from 'react';
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
