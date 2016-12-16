import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const s = require('./style.css');

class About extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.about}>
        <h4>About</h4>
        <RaisedButton label="Default" /><br/>
        <TextField
          floatingLabelText="Stuff goes here"
        />
      </div>
    );
  }
}

export { About }
