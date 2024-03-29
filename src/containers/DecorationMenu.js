import React, { Component } from "react";
import decorations from "constants/decorations";
import { connect } from "react-redux";
import { fabric } from "fabric";
import { LazyLoadImage } from "react-lazy-load-image-component";
import config from "constants/config";
import uuidv4 from "uuid/v4";

class DecorationMenu extends Component {
  constructor(props) {
    super(props);

    this.onAddDecoration = this.onAddDecoration.bind(this);
  }

  onAddDecoration(url) {
    fabric.Image.fromURL(url, function(img) {
      window.canvas.add(img);
      img.set("uuid", uuidv4());
      img.set("scaleX", 0.5);
      img.set("scaleY", 0.5);
      img.center();
    }, {
      crossOrigin: "anonymous"
    });
  }

  render() {
    return (
      <div>
        {this.props.config.activeTab === 4 && <div id="backgroundMenu">
          <h5 className="text-center">
            Add Decorations
          </h5>
          <hr />
          <div className="row d-flex justify-content-around p-3">
            {decorations.map(el => {
              return <div
                className="input-background p-2 col-4 img-fluid img-thumbnail shadow"
                key={el}
                onClick={() => this.onAddDecoration(config.CDN_DECORATIONS + el)}>
                <LazyLoadImage
                  alt={el}
                  src={config.CDN_DECORATIONS + el}
                />
              </div>;
            })}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DecorationMenu);