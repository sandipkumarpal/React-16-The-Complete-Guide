import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/BackDrop.css';

function BackDrop(props) {
  return props.show ?
    <div className="Backdrop" onClick={props.clicked} />
    : null;
}

BackDrop.defaultProps = {
  show: true,
  clicked: () => {}
};

BackDrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default BackDrop;
