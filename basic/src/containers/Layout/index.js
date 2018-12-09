import React from 'react';
import HoCAux from '../../hoc/HoCAux';

import '../../stylesheets/containers/Layout/layout.css';
import ToolBar from '../../components/ToolBar';
import SideDrawer from '../../components/SideDrawer';

class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showSideDrawer: true
      };
      this.SideDrawerCancleHandler = this.SideDrawerCancleHandler.bind(this);
    }

    SideDrawerCancleHandler() {
      this.setState({ showSideDrawer: false });
    }
    render() {
      return (
        <HoCAux>
            <ToolBar />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCancleHandler} />
            <main className="content">
                {this.props.children}
            </main>
        </HoCAux>
    );
  }
}

export default Layout;
