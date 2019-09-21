import React from "react";
import PropTypes from "prop-types";

import CursorIcon from 'images/cursor.svg';
import BackgroundIcon from 'images/mountain-range-on-black-background.svg';
import TextIcon from 'images/font.svg';
import DrawingIcon from 'images/pencil-edit-button.svg';
import DecorationIcon from 'images/stars.svg';
import AudioIcon from 'images/quaver-outline.svg';

export default function NarrowSidebar(props) {
  return <div className="bg-light sidebar-wrapper p-2 bg-primary">
    <div className="small">
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(0)}>
        <img src={CursorIcon} className="img-fluid" />
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(1)}>
        <img src={BackgroundIcon} className="img-fluid" />
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(2)}>
        <img src={TextIcon} className="img-fluid" />
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(3)}>
        <img src={DrawingIcon} className="img-fluid" />
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(4)}>
        <img src={DecorationIcon} className="img-fluid" />
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={() => props.changeActiveTab(5)}>
        <img src={AudioIcon} className="img-fluid" />
      </button>
    </div>
  </div>;
}

NarrowSidebar.propTypes = {
  changeActiveTab: PropTypes.func.isRequired
};