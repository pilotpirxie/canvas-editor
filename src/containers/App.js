import React, { PureComponent } from "react";
import { connect } from "react-redux";

import actionTypes from "constants/actionTypes";

import NarrowSidebar from "components/NarrowSidebar";
import WideSidebar from "components/WideSidebar";
import ContentWrapper from "components/ContentWrapper";
import FontPreloader from "components/FontPreloader";

import Canvas from "containers/Canvas";
import PropertyInspector from "containers/PropertyInspector";
import BackgroundMenu from "containers/BackgroundMenu";
import DecorationMenu from "containers/DecorationMenu";
import AudioMenu from "containers/AudioMenu";
import DrawingMenu from "containers/DrawingMenu";
import TextMenu from "containers/TextMenu";
import SendMenu from "containers/SendMenu";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  changeActiveTab(tabIndex) {
    if (tabIndex === 3) {
      window.canvas.set("isDrawingMode", true);
    } else {
      window.canvas.set("isDrawingMode", false);
    }

    this.props.dispatch({ type: actionTypes.SET_SIDEBAR_ACTIVE_TAB, tabIndex });
  }

  render() {
    const { activeTab } = this.props.config;

    return (
      <div className="wrapper d-flex">
        <NarrowSidebar changeActiveTab={this.changeActiveTab} activeTab={activeTab}/>
        <WideSidebar>
          <PropertyInspector />
          <BackgroundMenu />
          <TextMenu />
          <DrawingMenu />
          <DecorationMenu />
          <AudioMenu />
          <SendMenu />
        </WideSidebar>
        <ContentWrapper>
          <Canvas />
        </ContentWrapper>
        <FontPreloader />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);