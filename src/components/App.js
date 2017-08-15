import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { submitForm } from './../actions';
import Message from './../message';

injectTapEventPlugin();

const style = {width: 350};

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
          <TextField hintText="Имя" floatingLabelText="Введите имя" ref='firstName' style={style}/><br/>
          <TextField hintText="Фамилия" floatingLabelText="Введите фамилию" ref='lastName' style={style}/><br/>
          <TextField hintText="Электронная почта" floatingLabelText="Введите адрес этектронной почты" ref='emailAdress' style={style}/><br/>
          <TextField type='password' hintText="Пароль" floatingLabelText="Введите пароль" ref='password' style={style}/><br/>
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
