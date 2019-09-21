import React, {PureComponent} from 'react';
import { connect } from "react-redux";

import actionTypes from 'constants/actionTypes';

import NarrowSidebar from 'components/NarrowSidebar';
import WideSidebar from "components/WideSidebar";
import ContentWrapper from "components/ContentWrapper";

import Canvas from 'containers/Canvas';
import PropertyInspector from "containers/PropertyInspector";
import BackgroundMenu from "containers/BackgroundMenu";
import DecorationMenu from "containers/DecorationMenu";
import AudioMenu from "containers/AudioMenu";
import DrawingMenu from "containers/DrawingMenu";
import TextMenu from "containers/TextMenu";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  changeActiveTab(tabIndex) {
    this.props.dispatch({type: actionTypes.SET_SIDEBAR_ACTIVE_TAB, tabIndex})
  }

  render() {
    const {activeTab} = this.props.config;
    return (
      <div className="wrapper d-flex">
        <NarrowSidebar changeActiveTab={this.changeActiveTab}/>
        <WideSidebar>
          <PropertyInspector />
          {activeTab === 1 && <BackgroundMenu />}
          {activeTab === 2 && <TextMenu />}
          {activeTab === 3 && <DrawingMenu />}
          {activeTab === 4 && <DecorationMenu />}
          {activeTab === 5 && <AudioMenu />}
        </WideSidebar>
        <ContentWrapper>
          <Canvas />
        </ContentWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  }
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(App);