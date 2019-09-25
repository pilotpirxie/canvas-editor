import React from "react";
import PropTypes from "prop-types";

import CursorIcon from "images/cursor.svg";
import BackgroundIcon from "images/mountain-range-on-black-background.svg";
import TextIcon from "images/font.svg";
import DrawingIcon from "images/pencil-edit-button.svg";
import DecorationIcon from "images/stars.svg";
import AudioIcon from "images/quaver-outline.svg";
import SendIcon from "images/send-button.svg";

export default function NarrowSidebar(props) {
  return <div className="sidebar-wrapper bg-dark-blue">
    <div className="small">
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 0 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(0)}>
        <img
          src={CursorIcon}
          className="img-fluid"
          alt="Cursor Button"/>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 1 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(1)}>
        <img
          src={BackgroundIcon}
          className="img-fluid"
          alt="Background Button"/>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 2 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(2)}>
        <img
          src={TextIcon}
          className="img-fluid"
          alt="Text Button"/>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 3 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(3)}>
        <img
          src={DrawingIcon}
          className="img-fluid"
          alt="Drawing Button"/>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 4 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(4)}>
        <img
          src={DecorationIcon}
          className="img-fluid"
          alt="Decoration Button"/>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 p-3 ${props.activeTab === 5 ? "active-button" : ""}`}
        onClick={() => props.changeActiveTab(5)}>
        <img
          src={SendIcon}
          className="img-fluid"
          alt="Send Button"/>
      </button>
    </div>
  </div>;
}

NarrowSidebar.propTypes = {
  changeActiveTab: PropTypes.func.isRequired
};