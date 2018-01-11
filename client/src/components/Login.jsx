import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput(field, event) {
    console.log(field);
    this.setState({ [field]: event.target.value });
  }

  handleLogin() {
    var info = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.handleLoginSubmit(info);

    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return(
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              className="form-control" 
              name="username" 
              placeholder="Enter username" 
              value={ this.state.username }
              onChange={ this.handleInput.bind(this, 'username') } 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Enter password"
              value={ this.state.password }
              onChange={ this.handleInput.bind(this, 'password') } />
          </div>
          <button 
            type="button" 
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={ this.handleLogin.bind(this) }>Login</button>
        </form>
      </div>
    );
  }
}

//<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />

export default Login;



  {/* <div >
        Username: <input type="text" 
                         name="username"
                         value={ this.state.username }
                         onChange={ this.handleInput.bind(this, 'username') } />
        Password: <input type="password"
                         name="password"
                         value={ this.state.password } 
                         onChange={ this.handleInput.bind(this, 'password') } />
                         {console.log(this.state.password)}
        <button className="btn btn-danger btn-sm" onClick={ this.handleLogin.bind(this) }>Login</button>
        {/* <button className="btn btn-danger btn-sm" onClick={ this.handleLogout.bind(this) } */}
      // </div> */}