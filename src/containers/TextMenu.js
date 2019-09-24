import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { fabric } from "fabric";
import fontFamilies from "constants/fontFamilies";

class TextMenu extends Component {
  constructor(props) {
    super(props);

    this.onAddText = this.onAddText.bind(this);
  }

  onAddText(fontFamily = "Lato") {
    const text = new fabric.IText("Type Something", {
      fontSize: 60,
      fontFamily: fontFamily,
      fill: "#000000"
    });
    window.canvas.add(text);
    text.set("uuid", uuidv4());
    text.center();
  }

  render() {
    return (
      <div>
        {this.props.config.activeTab === 2 && <div>
          <h5 className="text-center">
            Add Text
          </h5>
          <hr />
          {fontFamilies.map(el => {
            return <div
              className="mb-3 cursor-pointer shadow p-3"
              key={el}
              onClick={() => this.onAddText(el)}>
              <div style={{ fontFamily: el, fontSize: "1.5rem" }}>{el}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextMenu);