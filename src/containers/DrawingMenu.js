import React, {Component} from 'react';

class DrawingMenu extends Component {
  render() {
    return (
      <div id="drawingMenu">
        <h5 className="text-center">
          Drawing
        </h5>
        <hr />
        <div className="form-group">
          <label htmlFor="inputBrushSize">Brush Size</label>
          <input type="number" className="form-control form-control-sm" id="inputBrushSize" min={1} max={48} defaultValue={10} />
        </div>
        <div className="form-group">
          <label htmlFor="inputBrushColor">Brush Color</label>
          <input type="color" className="form-control form-control-sm" id="inputBrushColor" />
        </div>
      </div>
    );
  }
}

export default DrawingMenu;