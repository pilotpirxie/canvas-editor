import React, { Component } from "react";
import { connect } from "react-redux";
import backgrounds from "constants/backgrounds";
import { fabric } from "fabric";
import config from "constants/config";
import { LazyLoadImage } from "react-lazy-load-image-component";

class BackgroundMenu extends Component {
  constructor(props) {
    super(props);

    this.onSetBackground = this.onSetBackground.bind(this);
  }
  
  onSetBackground(url) {
    fabric.Image.fromURL(url, function(img) {
      window.canvas.setBackgroundImage(img, window.canvas.renderAll.bind(window.canvas), {});
      img.scaleToWidth(window.canvas.width);
      img.scaleToHeight(window.canvas.height);
      window.canvas.setBackgroundImage(img);
      window.canvas.requestRenderAll();
    }, {
      crossOrigin: "anonymous"
    });
  }
  
  render() {
    return (
      <div>
        {this.props.config.activeTab === 1 && <div id="backgroundMenu">
          <h5 className="text-center">
            Change Background
          </h5>
          <hr />
          {backgrounds.map(el => {
            return <div
              className="input-background mb-3 img-fluid img-thumbnail shadow"
              key={el}
              onClick={() => this.onSetBackground(config.CDN_BACKGROUNDS + el)}>
              <LazyLoadImage
                alt={el}
                src={config.CDN_BACKGROUNDS + el}
              />
            </div>;
          })}
        </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundMenu);