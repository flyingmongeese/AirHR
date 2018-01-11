import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInput(field, event) {
    console.log(field);
    this.setState({ [field]: event.target.value });
  }

  handleLogin() {
    console.log('hello');
  }

  isLoggedIn() {
    if (this.props.isLoggedIn === false) {
      return (
        <span className="navbar-right" >
          <button className="btn btn-outline-danger my-2 my-sm-0"
                  onClick={ this.props.handleNavChange.bind(null, 'loginView') } 
                  >Login</button>
          <button className="btn btn-outline-danger my-2 my-sm-0">Register</button>
        </span>
      );
    } else {
      return (
        <span className="navbar-right" >
          <button className="btn btn-outline-danger my-2 my-sm-0"
                  onClick={ this.props.handleNavChange.bind(null, 'loginView') } 
                  >My Profile</button>
          <button className="btn btn-outline-danger my-2 my-sm-0">Logout</button>
        </span>
      );
    }
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-static-top navBarClean">
          <div className="container-fluid">
              <button className="btn btn-outline-danger my-2 my-sm-0" 
                      type="button" 
                      onClick={ this.props.handleNavChange.bind(null, 'homeView') }
                      >Baby Got Back</button>
                { this.isLoggedIn() }
          </div>
        </nav> 
      </div>
    )
  } 
}

export default Navbar;

{/* <form className="navbar-form navbar-right form-inline">
                  <div className="form-group">
                    <input className="form-control mr-sm-2" type="text" placeholder="User"/>
                    <input className="form-control mr-sm-2" type="text" placeholder="Password"/>
                  </div>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Login</button>
              </form> */}

// import React from 'react';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     }
//   }

//   handleInput(field, event) {
//     console.log(field);
//     this.setState({ [field]: event.target.value });
//   }

//   handleLogin() {
//     var info = {
//       username: this.state.username,
//       password: this.state.password
//     }

//     this.props.handleLoginSubmit(info);

//     this.setState({
//       username: '',
//       password: ''
//     });
//   }

//   render() {
//     return(
//       <div >
//         Username: <input type="text" 
//                          name="username"
//                          value={ this.state.username }
//                          onChange={ this.handleInput.bind(this, 'username') } />
//         Password: <input type="password"
//                          name="password"
//                          value={ this.state.password } 
//                          onChange={ this.handleInput.bind(this, 'password') } />
//                          {console.log(this.state.password)}
//         <button className="btn btn-danger btn-sm" onClick={ this.handleLogin.bind(this) }>Login</button>
//         {/* <button className="btn btn-danger btn-sm" onClick={ this.handleLogout.bind(this) } */}
//       </div>
//     );
//   }
// }

// //<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />

// export default Login;

