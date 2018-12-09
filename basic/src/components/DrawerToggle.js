import React from 'react';

import '../stylesheets/components/DrawerToggle.css';

function DrawerToggle(props) {
  return (
    <div onClick={props.clicked} className="DrawerToggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
