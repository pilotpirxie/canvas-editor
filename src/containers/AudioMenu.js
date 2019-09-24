import React, { Component } from "react";
import { connect } from "react-redux";
import config from "constants/config";
import audio from "constants/audio";
import actionTypes from "../constants/actionTypes";

class AudioMenu extends Component {
  constructor(props) {
    super(props);

    this.onChangeAudio = this.onChangeAudio.bind(this);
  }

  onChangeAudio(id, src) {
    this.props.dispatch({
      type: actionTypes.SET_AUDIO,
      id,
      src,
    });
  }

  render() {
    return (
      <div>
        {this.props.config.activeTab === 5 && <div id="audioMenu">
          <h5 className="text-center">
          Add Audio
          </h5>
          <hr />
          {audio.map(el => {
            return <div className="mb-3" key={el.id}>
              <audio
                controls
                className="w-100">
                <source
                  src={`${config.CDN_AUDIO}${el.src}.mp3`}
                  type="audio/mpeg" />
                <source
                  src={`${config.CDN_AUDIO}${el.src}.ogg`}
                  type="audio/ogg" />
              </audio>
              <button
                className="btn btn-outline-primary btn-block btn-sm"
                onClick={() => this.onChangeAudio(el.id, `${config.CDN_AUDIO}${el.src}`)}>{el.title}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AudioMenu);