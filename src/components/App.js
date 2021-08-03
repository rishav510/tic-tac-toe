import './App.css';

import React from 'react';

import Board from './Board';

class App extends React.Component{
  render(){
    return (
      <div className = "grid-wrapper">
        <div className = "left-wrapper">
          <div className = "left-container">
            Game Records.
            
          </div>
        </div>
        <div className = "right-wrapper">
          <div className = "right-container">
            <div className = "flex-aligner">
              <Board/>
            </div>

          </div>
        </div>
          
      </div>
      );

  }
}
export default App;
