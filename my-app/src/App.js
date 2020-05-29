import React from 'react';
import { LeftMenu } from './components/left'
import { RightMenu } from './components/right'
import './App.css';

// function App() {
  
// }

class App extends React.Component  {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <RightMenu />
        </div>
      </div>
    );
  }
}

export default App;
