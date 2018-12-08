import React from 'react';

import logo from '../assets/images/burger-logo.png';
import '../stylesheets/components/Logo.css';

function Logo(props) {
  return (
    <div className="Logo">
      <img src={logo} />
    </div>
  );
}

export default Logo;
