import React from 'react';
import PropTypes from 'prop-types';

import HoCAux from '../../hoc/HoCAux';

import '../../stylesheets/containers/Layout/layout.css';
import ToolBar from '../../components/ToolBar';
import SideDrawer from '../../components/SideDrawer';

class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showSideDrawer: false
      };
      this.sideDrawerCancleHandler = this.sideDrawerCancleHandler.bind(this);
      this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
    }

    sideDrawerCancleHandler() {
      this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler() {
      this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer};
      });
    }

    render() {
      return (
        <HoCAux>
            <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCancleHandler} />
            <main className="content">
                {this.props.children}
            </main>
        </HoCAux>
    );
  }
}

Layout.defaultProps = {
  children: {},
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
