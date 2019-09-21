import React, {Component} from 'react';
import {connect} from "react-redux";

class PropertyInspector extends Component {
  render() {
    const {activeTab, selectedObjectUUID} = this.props.config;
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
                <input type="number" className="col-5 form-control form-control-sm" id="inputX" />
                <input type="number" className="col-5 form-control form-control-sm" id="inputY" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputScaleX">Scale</label>
              <div className="d-flex justify-content-between">
                <input type="number" className="col-5 form-control form-control-sm" id="inputScaleX" min={0} max={5000} />
                <input type="number" className="col-5 form-control form-control-sm" id="inputScaleY" min={0} max={5000} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAngle">Angle</label>
              <input type="number" className="form-control form-control-sm" id="inputAngle" min={0} max={360} />
            </div>
            <div className="form-group">
              <label htmlFor="inputOpacity">Opacity</label>
              <input type="number" className="form-control form-control-sm" id="inputOpacity" min={0} max={100} />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between">
                <button className="col-5 btn btn-primary btn-sm" id="btnMoveToTop">Move to Top</button>
                <button className="col-5 btn btn-primary btn-sm" id="btnMoveToBottom">Move to Bottom</button>
              </div>
            </div>
            <div>
              <hr />
              <div className="form-group">
                <label htmlFor="inputFontFamily">Font</label>
                <select className="form-control form-control-sm" id="inputFontFamily">
                  <option>Default select</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputFontColor">Font Size / Font Color</label>
                <div className="d-flex justify-content-between">
                  <input type="number" className="col-5 form-control form-control-sm" id="inputFontSize" min={1} max={360} />
                  <input type="color" className="col-5 form-control form-control-sm" id="inputFontColor" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputContent">Content</label>
                <textarea id="inputContent" className="form-control form-control-sm" defaultValue={""} />
              </div>
            </div>
          </div>}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  }
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInspector);