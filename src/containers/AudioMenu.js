import React, { Component } from "react";

class AudioMenu extends Component {
  render() {
    return (
      <div id="audioMenu">
        <h5 className="text-center">
          Audio
        </h5>
        <hr />
        <div className="mb-3">
          <audio
            controls
            className="w-100">
            <source
              src="src/audio/sample.mp3"
              type="audio/mpeg" />
            <source
              src="src/audio/sample.ogg"
              type="audio/ogg" />
          </audio>
          <button className="btn btn-outline-primary btn-block btn-sm">Lorem - Sample Audio Track</button>
        </div>
        <div className="mb-3">
          <audio
            controls
            className="w-100">
            <source
              src="src/audio/sample.mp3"
              type="audio/mpeg" />
            <source
              src="src/audio/sample.ogg"
              type="audio/ogg" />
          </audio>
          <button className="btn btn-outline-primary btn-block btn-sm">Lorem Ipsum - Sample Long Name of Track</button>
        </div>
        <div className="mb-3">
          <audio
            controls
            className="w-100">
            <source
              src="src/audio/sample.mp3"
              type="audio/mpeg" />
            <source
              src="src/audio/sample.ogg"
              type="audio/ogg" />
          </audio>
          <button
            disabled
            className="btn btn-outline-primary btn-block btn-sm">Sample - Lorem Ipsum Dolor Sit Amet</button>
        </div>
      </div>
    );
  }
}

export default AudioMenu;