import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import SearchView from './components/SearchView.jsx';
import Login from './components/Login.jsx';
import Listing from './components/Listing.jsx';
import HomeView from './components/HomeView.jsx';


class App extends React.Component {

  constructor(props) {
  	super(props);
    this.state = {
      currentView: 'homeView'// evan's 
    }
  }


  handleSearchSubmit() {
    // nick's test
    this.setState({
      currentView: 'searchView'
    })
  }
  
  handleLoginSubmit(login) {
    axios.post('/login', login)
      .then(response => {
        console.log(response); 
      })
      .catch(error => {
        console.error(error); 
      });
  }

  switchViews() {
    if (this.state.currentView === 'homeView') {
      return <HomeView searchClickFn = {this.handleSearchSubmit.bind(this)}/>
    } else if (this.state.currentView === 'searchView') {
      return <SearchView />
    }
  }


  render () {

    return (
        <div>
          <Login  handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />
          {this.switchViews()}
          <div>
              {this.switchViews()}
          </div>
            <Listing />

        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



              // <div className="container-fluid">
              //   <div className="row">
              //     <Listing />
              //   </div>
              // </div>
                        // <img src="https://files.slack.com/files-pri/T7ZKUC7EW-F8R07J085/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>