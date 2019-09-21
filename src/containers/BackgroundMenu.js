import React, {Component} from 'react';

class BackgroundMenu extends Component {
  render() {
    return (
      <div id="backgroundMenu">
        <h5 className="text-center">
          Background
        </h5>
        <hr />
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/854x480" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/854x480" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/854x480" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/854x480" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default BackgroundMenu;