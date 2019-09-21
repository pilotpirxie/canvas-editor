import React, {Component} from 'react';
import {fabric} from 'fabric';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.resize = this.resize.bind(this);
    this.canvasEditorContainer = React.createRef();
  }

  componentDidMount() {
    window.canvas = new fabric.Canvas('c', {
      backgroundColor: '#fff',
      selectionLineWidth: 4,
      selection: false,
      hoverCursor: "pointer"
    });

    window.addEventListener("resize", this.resize);
    window.addEventListener("load", this.resize);
  }

  resize() {
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

export default Canvas;