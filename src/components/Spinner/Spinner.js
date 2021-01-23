import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.scss';

const spinnerTypes = {
  DROPS: 'drops',
  DUALRING: 'dualring',
  ROLLERDOTS: 'rollerdots',
};

const Spinner = ({ type }) => {
  const classes = `Spinner-${spinnerTypes[type.toUpperCase()]}`;
  const extraDivs = [];
  let extraDivsAmount = 0;

  switch (type) {
    case spinnerTypes.DROPS:
      extraDivsAmount = 2;
      break;
    case spinnerTypes.ROLLERDOTS:
      extraDivsAmount = 7;
      break;
    default:
      extraDivsAmount = 0;
  }

  for (let i = 0; i <= extraDivsAmount; i += 1) {
    extraDivs.push(<div />);
  }

  return <div className={styles[classes]}>{extraDivs}</div>;
};

Spinner.defaultProps = { type: spinnerTypes.DROPS };
Spinner.propTypes = { type: PropTypes.oneOf(spinnerTypes) };

export default Spinner;
