import React, { Component } from "react";
import { connect } from "react-redux";
import actionTypes from "../constants/actionTypes";

class DrawingMenu extends Component {
  constructor(props) {
    super(props);

    this.onSetBrushProperties = this.onSetBrushProperties.bind(this);
  }

  onSetBrushProperties(key, val) {
    switch(key) {
    case "width":
      window.canvas.freeDrawingBrush.width = val;
      break;
    case "color":
      window.canvas.freeDrawingBrush.color = val;
      break;
    default:
      break;
    }

    this.props.dispatch({
      type: actionTypes.SET_BRUSH_PROPERTIES,
      data: {
        [key]: val
      }
    });
  }

  render() {
    const { activeTab } = this.props.config;

    return (
      <div>
        {activeTab === 3 && <div id="drawingMenu">
          <h5 className="text-center">
            Drawing
          </h5>
          <hr />
          <div className="form-group">
            <label htmlFor="inputBrushSize">Brush Size ({this.props.drawing.width})</label>
            <input
              type="range"
              className="form-control form-control-sm"
              min={1}
              max={96}
              value={this.props.drawing.width}
              onChange={ev => this.onSetBrushProperties("width", Number.parseInt(ev.target.value) || 1)}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputBrushColor">Brush Color ({this.props.drawing.color})</label>
            <input
              type="color"
              className="form-control form-control-sm"
              value={this.props.drawing.color}
              onChange={ev => this.onSetBrushProperties("color", ev.target.value)}/>
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    drawing: state.drawing
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(DrawingMenu);