import React from 'react';

import '../stylesheets/components/BackDrop.css';

function BackDrop(props) {
  return props.show ?
    <div className="Backdrop" onClick={props.clicked} />
    : null;
}

export default BackDrop;
