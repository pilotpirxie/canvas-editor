import React, { Component } from "react";
import { fabric } from "fabric";
import { connect } from "react-redux";
import actionTypes from "constants/actionTypes";
import uuidv4 from 'uuid/v4';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
    this.onClearSelection = this.onClearSelection.bind(this);
    this.onUpdateControls = this.onUpdateControls.bind(this);
    this.canvasEditorContainer = React.createRef();
  }

  componentDidMount() {
    window.canvas = new fabric.Canvas("c", {
      backgroundColor: "#fff",
      selectionLineWidth: 4,
      selection: false,
      hoverCursor: "pointer"
    });

    window.addEventListener("resize", this.onResize);
    window.addEventListener("load", this.onResize);

    window.canvas.on({
      "object:moving": this.onUpdateControls,
      "object:scaling": this.onUpdateControls,
      "object:resizing": this.onUpdateControls,
      "object:rotating": this.onUpdateControls,
      "object:skewing": this.onUpdateControls,
      "selection:created": this.onUpdateControls,
      "text:changed": this.onUpdateControls,
      "object:modified": this.onUpdateControls,
      "selection:updated": this.onUpdateControls,
      "selection:cleared": this.onClearSelection,
    });

  }

  onClearSelection() {
    this.props.dispatch({
      type: actionTypes.SET_INSPECTOR_VALUES,
      data: {
        selectedObjectUUID: "",
        selectedObjectType: "",
      }
    });
  }
  
  onUpdateControls(options) {
    const isTypeText = options.target.get("type") === "text" || options.target.get("type") === "i-text";
    const uuid = options.target.get("uuid");

    if (!uuid) {
      options.target.set('uuid', uuidv4());
    }

    this.props.dispatch({
      type: actionTypes.SET_INSPECTOR_VALUES,
      data: {
        selectedObjectUUID: options.target.get("uuid"),
        selectedObjectType: options.target.get("type"),
        left: Number.parseInt(options.target.get("left")),
        top: Number.parseInt(options.target.get("top")),
        scaleX:  options.target.get("scaleX"),
        scaleY:  options.target.get("scaleY"),
        angle: Number.parseInt(options.target.get("angle")),
        opacity: options.target.get("opacity"),
        fontFamily: isTypeText ? options.target.get("fontFamily") : "",
        fontSize: isTypeText ? options.target.get("fontSize") : "",
        fill: isTypeText ? options.target.get("fill") : "",
        text: isTypeText ? options.target.get("text") : "",
      }
    });
  }

  onResize() {
    const width = this.canvasEditorContainer.current.offsetWidth;
    const height = this.canvasEditorContainer.current.offsetHeight;
    let scaleRatio = Math.min(width * 0.95 / 854, height * 0.95 / 480, 1);
    window.canvas.setDimensions({ width: 854 * scaleRatio, height: 480 * scaleRatio });
    window.canvas.setZoom(scaleRatio);
  }

  render() {
    return (
      <div className="w-100 h-100 d-flex justify-content-around align-items-center" ref={this.canvasEditorContainer}>
        <canvas id="c" width={854} height={480} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);