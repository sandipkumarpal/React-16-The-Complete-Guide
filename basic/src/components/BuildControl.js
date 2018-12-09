import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/BuildControl.css';

function BuildControl(props) {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        onClick={props.removed}
        disabled={props.disable}>Less</button>
      <button
        className="More"
        onClick={props.added}>More</button>
    </div>
  );
}

BuildControl.defaultProps = {
  label: '',
  disable: true,
  removed: () => {},
  added: () => {}
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired
};

export default BuildControl;
