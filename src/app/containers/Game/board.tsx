import * as React from 'react';
import {click} from '../../redux/modules/game'
const {connect} = require('react-redux');

@connect(
  state => ({
    squares: state.game.squares
  }),
  dispatch => ({
    click: index => dispatch(click(index))
  })
)
export class Board extends React.Component<any, any> {  

  renderSquare(index:number) {
    const {click, squares} = this.props;

    return <Square value={squares[index]} handleClick={() => click(index)} />;
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props){
    return (
      <button className="square" onClick={props.handleClick}>
        {props.value}
      </button>
    );
}