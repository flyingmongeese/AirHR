import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listing from './components/Listing.jsx';

class App extends React.Component {

  constructor(props) {
  	super(props);
  }

  render () {
    return (
            <div>
              <div className="row">
                <div className="col-lg-12 jumbotron cleanBorder center-text"> 
                  <img src="https://files.slack.com/files-pri/T7ZKUC7EW-F8R07J085/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>
                  <br />
                  <br />
                  <h2 className="display-4"> Book unique homes and</h2> 
                  <h2 className="display-4"> experiences all over the world. </h2>
                  <br />
                  <br />
                  <Search />
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <Listing />
                </div>
              </div>
            </div>

          )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
