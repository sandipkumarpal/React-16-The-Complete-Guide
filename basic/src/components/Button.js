import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/Button.css';

function Button(props) {
  return(
    <button
      className={`Button ${props.btnType}`}
      onClick={props.clicked}>
        {props.children}
      </button>
  );
}

Button.defaultProps = {
  btnType: '',
  clicked: () => {},
  children: ''
};

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
