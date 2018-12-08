import React from 'react';

import '../stylesheets/components/Button.css';

function Button(props) {
  return(
    <div className={`Button ${props.btnType}`} onClick={props.clicked}>{props.children}</div>
  );
}

export default Button;
