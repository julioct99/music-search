import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ changed, placeholder, type, size }) => {
  const classes = `${styles[size.toLowerCase()]} ${styles.Input}`;

  return (
    <input
      className={classes}
      onChange={changed}
      placeholder={placeholder}
      type={type}
      spellCheck='false'
      autoComplete='false'
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  size: 'm',
};

Input.propTypes = {
  changed: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default Input;
