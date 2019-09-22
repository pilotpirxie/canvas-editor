import React, { Component } from "react";
import { connect } from "react-redux";
import actionTypes from "../constants/actionTypes";

class PropertyInspector extends Component {
  constructor(props) {
    super(props);

    this.setProperty = this.setProperty.bind(this);
  }

  setProperty(key, val) {
    const { selectedObjectUUID } = this.props.inspector;

    window.canvas.getObjects().forEach(obj => {
      if(obj.get("uuid") === selectedObjectUUID) {
        obj.set(key, val).setCoords();
        window.canvas.renderAll();
      }
    });

    this.props.dispatch({
      type: actionTypes.SET_INSPECTOR_VALUES,
      data: {
        [key]: val,
      }
    });
  }

  render() {
    const { activeTab } = this.props.config;
    const { selectedObjectUUID, selectedObjectType } = this.props.inspector;

    return (
      <div>
        {activeTab === 0 && <div>
          {!selectedObjectUUID && <div>
            <h5 className="text-center">
              Property Inspector
            </h5>
            <hr />
            <div className="form-group">
              <div className="d-flex justify-content-center">
                Select something to inspect
              </div>
            </div>
          </div>}
          {!!selectedObjectUUID && <div>
            <h5 className="text-center">
              Property Inspector
            </h5>
            <hr />
            <div className="form-group">
              <label htmlFor="inputX">Position</label>
              <div className="d-flex justify-content-between">
                <input
                  type="number"
                  className="col-5 form-control form-control-sm"
                  value={this.props.inspector.left}
                  onChange={ev => this.setProperty("left", Number.parseInt(ev.target.value))}/>
                <input
                  type="number"
                  className="col-5 form-control form-control-sm"
                  value={this.props.inspector.top}
                  onChange={ev => this.setProperty("top", Number.parseInt(ev.target.value))}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputScaleX">Scale</label>
              <div className="d-flex justify-content-between">
                <input
                  type="number"
                  className="col-5 form-control form-control-sm"
                  min={0}
                  max={5000}
                  value={Number.parseInt(this.props.inspector.scaleX * 100)}
                  onChange={ev => this.setProperty("scaleX", Number.parseFloat(ev.target.value / 100))}/>
                <input
                  type="number"
                  className="col-5 form-control form-control-sm"
                  min={0}
                  max={5000}
                  value={Number.parseInt(this.props.inspector.scaleY * 100)}
                  onChange={ev => this.setProperty("scaleY", Number.parseFloat(ev.target.value / 100))}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAngle">Angle</label>
              <input
                type="number"
                className="form-control form-control-sm"
                min={0}
                max={360}
                value={this.props.inspector.angle}
                onChange={ev => this.setProperty("angle", Number.parseInt(ev.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputOpacity">Opacity</label>
              <input
                type="number"
                className="form-control form-control-sm"
                min={0}
                max={100}
                value={Number.parseInt(this.props.inspector.opacity * 100)}
                onChange={ev => this.setProperty("opacity", Number.parseFloat(ev.target.value / 100))}/>
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between">
                <button className="col-5 btn btn-primary btn-sm">Move to Top</button>
                <button className="col-5 btn btn-primary btn-sm">Move to Bottom</button>
              </div>
            </div>
            {(selectedObjectType === "text" || selectedObjectType === "i-text") && <div>
              <hr />
              <div className="form-group">
                <label htmlFor="inputFontFamily">Font</label>
                <select
                  className="form-control form-control-sm"
                  value={this.props.inspector.fontFamily}
                  onChange={ev => this.setProperty("fontFamily", ev.target.value)}>
                  <option value="Arial">Arial</option>
                  <option value="Lato">Lato</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputFontColor">Font Size / Font Color</label>
                <div className="d-flex justify-content-between">
                  <input
                    type="number"
                    className="col-5 form-control form-control-sm"
                    min={1}
                    max={360}
                    value={this.props.inspector.fontSize}
                    onChange={ev => this.setProperty("fontSize", ev.target.value)}/>
                  <input
                    type="color"
                    className="col-5 form-control form-control-sm"
                    id="inputFontColor"
                    value={this.props.inspector.fill}
                    onChange={ev => this.setProperty("fill", ev.target.value)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputContent">Content</label>
                <textarea
                  className="form-control form-control-sm"
                  value={this.props.inspector.text}
                  onChange={ev => this.setProperty("text", ev.target.value)}/>
              </div>
            </div>}
          </div>}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    inspector: state.inspector,
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInspector);