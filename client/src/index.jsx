import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import SearchView from './components/SearchView.jsx';
import Login from './components/Login.jsx';
import Listing from './components/Listing.jsx';
import HomeView from './components/HomeView.jsx';
import Navbar from './components/Navbar.jsx';

// ../../sampleData/images


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'homeView',
      currentListing: null,
      isLoggedIn: false
    }
  }


  handleSearchSubmit(searchVal) {
    // nick's test
    this.setState({
      currentView: 'searchView'
    })
  }
  
  handleLoginSubmit(login) {
    var app = this;
    axios.post('/login', login)
      .then(response => {
         app.setState({
           currentView: 'homeView',
           isLoggedIn: true
         })
      })
      .catch(error => {
        console.error(error); 
      });
  }

  handleListingClick(listing) {
    this.setState({
      currentView: 'listView',
      currentListing: listing
    })
  }

  handleNavChange(view) {
    this.setState({
      currentView: view
    });
  }

  switchViews() {
    if (this.state.currentView === 'homeView') {
      return <HomeView searchClickFn ={ this.handleSearchSubmit.bind(this) }
                       listingClickFn={ this.handleListingClick.bind(this) } />
    } else if (this.state.currentView === 'searchView') {
      return <SearchView listingClickFn={ this.handleListingClick.bind(this) } />
    } else if (this.state.currentView === 'listView') {
      return <Listing listing={ this.state.currentListing } />
    } else if (this.state.currentView === 'loginView') {
      return <Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />
    }
  }


  render () {

    return (
        <div >
          <header>
            <Navbar isLoggedIn={ this.state.isLoggedIn } handleNavChange={ this.handleNavChange.bind(this) } />
          </header>

          <div className="container-fluid marginPush">
              {this.switchViews()}
          </div>

        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


 //<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) }/>

//<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />
              // <div className="container-fluid">
              //   <div className="row">
              //     <Listing />
              //   </div>
              // </div>
                        // <img src="https://files.slack.com/files-pri/T7ZKUC7EW-F8R07J085/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>