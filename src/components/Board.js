import './Board.css';

import React from 'react';

import Square from './Square';

class Board extends React.Component{

  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  renderSquare(i){
    return(

      <Square 
      value = {this.state.squares[i]}
      onClick = {() => {this.handleClick(i)}}
      />
    )
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext? 'X': 'O';
    
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    console.log(squares);
  }
  render(){
    return (
      <div className = 'board'>
        <svg height = '300px' width = '300px' >
          <line x1 = "0" y1 = "0" x2 = "300" y2 = "300" style = {{stroke: 'rgb(255,0,0)', strokeWidth: 2}}/>
        </svg>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    )
  }
}

export default Board;
