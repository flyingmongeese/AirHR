import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import SearchView from './components/SearchView.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {

  constructor(props) {
  	super(props);
  }


  handleSearchSubmit() {
    // nick's test
    
  handleLoginSubmit() {
    // Test
  }

  render () {
    return (
              <div className="row">
                <div className="col-lg-12 jumbotron center-text"> 
                  <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c513.png" width={400} height={125} mode='fit'/>
                  <br />
                  <h2 className="display-4"> Book unique homes and</h2> 
                  <h2 className="display-4"> experiences all over the world. </h2>
                  <h2 className="display-4"> more experiences </h2>
                  <form>
                    <div>
                    <label>
                      Address:
                      <input type="text" address="location" />
                      </label>
                      </div>
                      <div>
                      <label>
                      Bedrooms:
                      <input type="text" bedrooms="bedrooms"/>
                      </label>
                      </div>
                      <div>
                      <label>
                      Guests:
                      <input type="text" guests="guests"/>
                      </label>
                      <input type="submit" value="Submit" />
                      </div>
                  </form>
                  <br />
                  <br />
                  <Search />
                </div>
                <SearchView />
                <Login />
              </div>
          )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
