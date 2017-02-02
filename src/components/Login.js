import React, { Component } from 'react'

export default class Login extends Component {
  
  render() {
    return (
      <div>
        <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          {this.props.buttonText}
        </button>
      </div>
    )
  }
  
  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    this.props.onLoginClick({ username: username.value.trim(), password: password.value.trim() })
  }
}
