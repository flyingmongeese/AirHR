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
                  <br />
                  <br />
                  <Search />
                </div>
              </div>
          )
  }
}

<img src="http://sparetimelabs.com/animato/animato/panorama/pan.jpg"/>









ReactDOM.render(<App />, document.getElementById('app'));
