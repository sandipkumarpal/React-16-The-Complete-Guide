import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/DrawerToggle.css';

function DrawerToggle(props) {
  return (
    <div onClick={props.clicked} className="DrawerToggle">
      <div />
      <div />
      <div />
    </div>
  );
}

DrawerToggle.defaultProps = {
  clicked: () => {}
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
