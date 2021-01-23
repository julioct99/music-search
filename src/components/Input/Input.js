import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ changed, placeholder, type, size, value }) => {
  const classes = `${styles[size.toLowerCase()]} ${styles.Input}`;

  return (
    <input
      className={classes}
      onChange={changed}
      placeholder={placeholder}
      type={type}
      spellCheck='false'
      autoComplete='false'
      value={value}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  size: 'm',
  value: null,
};

Input.propTypes = {
  changed: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Input;
