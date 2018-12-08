import React from 'react';

import '../stylesheets/components/Modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
    </div>
  );
}

export default Modal;
