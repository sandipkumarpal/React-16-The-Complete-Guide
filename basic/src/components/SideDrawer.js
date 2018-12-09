import React from 'react';

import Logo  from './Logo';
import NavigationItems from './NavigationItems';
import BackDrop from './BackDrop';
import HoCAux from '../hoc/HoCAux';

import '../stylesheets/components/SideDrawer.css';

function SideDrawer(props) {
  let attachedSideDrawerClass = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedSideDrawerClass = ['SideDrawer', 'Open'];
  }
  return (
    <HoCAux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedSideDrawerClass.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </HoCAux>
  );
}

export default SideDrawer;
