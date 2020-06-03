import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
handleUsername = event => {
  console.log(event.target.value)
  this.setState({
    username: event.target.value
  })
}

handlePassword = event => {
  console.log(event.target.value)
  this.setState({
    password: event.target.value
  })
}


handleSubmit = event => {
  event.preventDefault()

  if(!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
}


  render() {
    // console.log(this.props.handleLogin)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} onChange={event=>this.handleUsername(event)} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} onChange={event=>this.handlePassword(event)} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
