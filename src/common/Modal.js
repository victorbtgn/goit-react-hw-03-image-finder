import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentWillMount() {
    window.addEventListener('keydown', this.pressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEscape);
  }

  pressEscape = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
