import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { submitForm } from './../actions';
import Message from './../messages';

injectTapEventPlugin();

class App extends Component {

  handleSubmit = e => {
    const emailValidate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.refs.emailAdress.getValue())

    if (this.refs.firstName.getValue() && this.refs.lastName.getValue() && emailValidate && this.refs.password.getValue()) {
      let message = new Message('Спасибо за регистрацию!');
      message.render();
      const values = {
      firstName: this.refs.firstName.getValue(),
      lastName: this.refs.lastName.getValue(),
      emailAdress: this.refs.emailAdress.getValue(),
      password: this.refs.password.getValue()
    }
      this.props.onSubmit(values);

      this.refs.firstName.input.value = '';
      this.refs.lastName.input.value = '';
      this.refs.emailAdress.input.value = '';
      this.refs.password.input.value = '';
    }
  }

  render() {
    return(
      <MuiThemeProvider>
        <div className='form'>
          <TextField hintText="First Name" floatingLabelText="Enter First Name" ref='firstName'/><br/>
          <TextField hintText="Last Name" floatingLabelText="Enter Last Name" ref='lastName'/><br/>
          <TextField hintText="Email Adress" floatingLabelText="Enter Email Adress" ref='emailAdress'/><br/>
          <TextField type='password' hintText="Password" floatingLabelText="Enter Password" ref='password'/><br/>
          <RaisedButton label='Submit' primary={true} onTouchTap={this.handleSubmit}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(
	state => ({
		store: state
	}),
    dispatch => ({
        onSubmit: (formValues) => {
            dispatch(submitForm(formValues))
        }
    })
)(App);
