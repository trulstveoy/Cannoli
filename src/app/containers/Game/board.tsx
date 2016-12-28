import * as React from 'react';
import {click} from '../../redux/modules/game'
const {connect} = require('react-redux');

function Square(props){
    return (
      <button className="square" onClick={props.handleClick}>
        {/* TODO */}
      </button>
    );
}


@connect(
  state => ({
    game: state.game
  }),
  dispatch => ({
    click: () => dispatch(click())
  })
)
export class Board extends React.Component<any, any> {  

  renderSquare(index:number) {
    const {click} = this.props;

    return <Square index={index} handleClick={click} />;
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