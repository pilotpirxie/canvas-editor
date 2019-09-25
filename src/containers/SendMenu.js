import React, { Component } from "react";
import { connect } from "react-redux";

class DrawingMenu extends Component {
  constructor(props) {
    super(props);

    this.onSaveToFile = this.onSaveToFile.bind(this);
    this.downloadPNG = React.createRef();
  }

  onSaveToFile(format = "png") {
    const dataURL = window.canvas.toDataURL({
      format,
      left: 0,
      top: 0,
      width: window.canvas.width,
      height: window.canvas.height,
    });

    dataURL.replace(`image/${format}`, "image/octet-stream");
    this.downloadPNG.current.setAttribute("href", dataURL);
  }

  render() {
    const { activeTab } = this.props.config;

    return (
      <div>
        {activeTab === 5 && <div id="drawingMenu">
          <h5 className="text-center">
            Save or Send
          </h5>
          <hr />
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <a
                ref={this.downloadPNG}
                href="#"
                className="col-12 btn btn-primary"
                download={`picture-${Math.round(Math.random() * 899) + 100}.png`}>
                <p
                  className="m-0 cursor-pointer text-white"
                  onClick={() => this.onSaveToFile("png")}>Save as PNG</p>
              </a>
            </div>
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