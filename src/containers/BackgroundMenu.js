import React, { Component } from "react";
import { connect } from "react-redux";
import backgrounds from "constants/backgrounds";
import {fabric} from 'fabric';

class BackgroundMenu extends Component {
  constructor(props) {
    super(props);

    this.onSetBackground = this.onSetBackground.bind(this);
  }
  
  onSetBackground(url) {
    fabric.Image.fromURL(url, function(img) {
      window.canvas.setBackgroundImage(img, window.canvas.renderAll.bind(window.canvas), {
        scaleX: window.canvas.width / img.width,
        scaleY: window.canvas.height / img.height
      });
    });
  }
  
  render() {
    return (
      <div>
        {this.props.config.activeTab === 1 && <div id="backgroundMenu">
          <h5 className="text-center">
            Background
          </h5>
          <hr />
          {backgrounds.map(el => {
            return <div className="input-background mb-3" key={el}>
              <img
                src={el}
                className="img-fluid"
                alt="test"
                onClick={() => this.onSetBackground(el)}/>
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