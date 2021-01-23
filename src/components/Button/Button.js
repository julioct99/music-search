import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ submit, children, clicked, size }) => {
  return (
    <button
      className={`${styles.Button} ${styles[size.toLowerCase()]}`}
      onClick={clicked}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'm',
  submit: false,
  clicked: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  submit: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Button;
