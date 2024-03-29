import React, { Component } from "react";
import { fabric } from "fabric";
import { connect } from "react-redux";
import actionTypes from "constants/actionTypes";
import uuidv4 from "uuid/v4";
import strokeStyle from "constants/strokeStyle";
import config from "constants/config";

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
    this.onClearSelection = this.onClearSelection.bind(this);
    this.onUpdateControls = this.onUpdateControls.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
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

    document.addEventListener("keydown", (event) => {
      const keyName = event.key;
      if (keyName === "Delete") {
        return this.deleteObject();
      }
    }, false);

  }

  deleteObject() {
    window.canvas.getActiveObjects().forEach((obj) => {
      window.canvas.remove(obj);
    });
    window.canvas.discardActiveObject().renderAll();
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
    options.target.set(strokeStyle);
    window.canvas.requestRenderAll();

    if (!uuid) {
      options.target.set("uuid", uuidv4());
    }

    if (this.props.selectedObjectUUID !== options.target.get("uuid")) {
      this.props.dispatch({ type: actionTypes.SET_SIDEBAR_ACTIVE_TAB, tabIndex: 0 });
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
    let scaleRatio = Math.min(width * 0.95 / config.WIDTH, height * 0.95 / config.HEIGHT, 1);
    window.canvas.setDimensions({ width: config.WIDTH * scaleRatio, height: config.HEIGHT * scaleRatio });
    window.canvas.setZoom(scaleRatio);
    window.canvas.renderAll();
  }

  render() {
    return (
      <div
        className="w-100 h-100 d-flex justify-content-around align-items-center"
        ref={this.canvasEditorContainer}>
        <canvas
          id="c"
          className="shadow"
          width={config.WIDTH}
          height={config.HEIGHT} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    selectedObjectUUID: state.inspector.selectedObjectUUID
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);