import React, {Component} from 'react';

class DecorationMenu extends Component {
  render() {
    return (
      <div>
        <h5 className="text-center">
          Decorations
        </h5>
        <hr />
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/600x600" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/800x420" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/620x300" className="img-fluid" />
        </div>
        <div className="input-background mb-3">
          <img src="https://via.placeholder.com/410x600" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default DecorationMenu;