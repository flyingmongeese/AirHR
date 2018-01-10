import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';

class App extends React.Component {

  constructor(props) {
  	super(props);
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
                    <label>
                      Address:
                      <input type="text" address="location" />
                      </label>
                      <label>
                      Bedrooms:
                      <input type="text" bedrooms="bedrooms"/>
                      </label>
                      <label>
                      Guests:
                      <input type="text" guests="guests"/>
                      </label>
                      <input type="submit" value="Submit" />
                  </form>
                  <br />
                  <br />
                  <Search />
                </div>
              </div>
          )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
