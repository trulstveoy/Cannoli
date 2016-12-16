import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {increment, decrement} from '../../redux/modules/home';
import {ICounter, ICounterAction} from '../../models/home';
const {connect} = require('react-redux');
const s = require('./style.css');

interface IProps{
  home: ICounter,
  increment: Redux.ActionCreator<ICounterAction>,
  decrement: Redux.ActionCreator<ICounterAction>
}

@connect(
  state => ({
    home: state.home
  }),
  dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  })
)

class Home extends React.Component<IProps, any> {
  public render() {
    const { increment, decrement, home } = this.props;

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <RaisedButton
          name="incBtn"
          label="Increment"
          onClick={increment} />          
        <RaisedButton
          name="decBtn"
          label="Decrement"
          onClick={decrement}
          disabled={home.count <= 0} />          
        <p>{home.count}</p>
      </div>
    );
  }
}

export { Home }
