import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/NavigationItem.css';

function NavigationItem(props) {
  return (
      <li className="NavigationItem">
        <a
          href={props.link}
          className={props.active ? 'active' : null}
        >
          {props.children}
        </a>
      </li>
  );
}

NavigationItem.defaultProps = {
  link: '',
  children: '',
  active: false
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavigationItem;
