import * as React from 'react';
import NavBar from './NavBar/NavBar';
import MainScreen from './MainScreen';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainScreen />
      </div>
    );
  }
}

export default App;
