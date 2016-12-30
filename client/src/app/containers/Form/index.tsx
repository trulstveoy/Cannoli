import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {changeValue, save} from '../../redux/modules/form';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

@connect(
  state => ({
    state: state.form
  }),
  dispatch => ({    
    handleChange: event => 
        dispatch(changeValue(event.target.id, event.target.value)),
    handleDateChange: (event, date) =>
        dispatch(changeValue('birthdate', date)),
    handleClick: () =>
        dispatch(save())
  })
)
export class Form extends React.Component<any, any> {  
    render(){
        const {handleChange, handleDateChange, handleClick} = this.props;

        return (
            <div>
                <TextField id="name" floatingLabelText="Name" onChange={handleChange} />
                <DatePicker id="birthdate" hintText="Birthdate" container="inline" mode="landscape" autoOk={true} onChange={handleDateChange} />               
                <RaisedButton label="Save" onClick={handleClick} />                
            </div>        
        );
    }
}