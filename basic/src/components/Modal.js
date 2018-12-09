import React from 'react';
import PropTypes from 'prop-types';

import HoCAux from '../hoc/HoCAux';
import BackDrop from './BackDrop';
import '../stylesheets/components/Modal.css';

function Modal(props) {
  return (
    <HoCAux>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity : props.show ? 1 : 0

        }}
      >
        {props.children}
      </div>
    </HoCAux>
  );
}

Modal.defaultProps = {
  show: false,
  modalClosed: () => {},
  children: {}
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

export default Modal;
