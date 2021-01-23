import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ changed, placeholder, type, size, textCenter }) => {
  const sizeClass = styles[size.toLowerCase()];
  const textCenterClass = textCenter ? styles['text-center'] : null;
  const className = [sizeClass, textCenterClass, styles.Input].join(' ');

  return (
    <input
      className={className}
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
  textCenter: false,
};

Input.propTypes = {
  changed: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  textCenter: PropTypes.bool,
};

export default Input;
