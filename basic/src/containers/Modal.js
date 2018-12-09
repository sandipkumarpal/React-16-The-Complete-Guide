import React from 'react';
import PropTypes from 'prop-types';

import HoCAux from '../hoc/HoCAux';
import BackDrop from '../components/BackDrop';
import '../stylesheets/containers/Modal.css';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <HoCAux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : this.props.show ? 1 : 0

          }}
        >
          {this.props.children}
        </div>
      </HoCAux>
    );
  }
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
