import React from 'react';
import PropTypes from 'prop-types';

import { repeatElement } from '../../shared/utilities/arrays';

import styles from './Spinner.module.scss';

const spinnerTypes = {
  DROPS: 'drops',
  DUALRING: 'dualring',
  ROLLERDOTS: 'rollerdots',
};

const Spinner = ({ type }) => {
  const className = `Spinner-${spinnerTypes[type.toUpperCase()]}`;
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

  return (
    <div className={styles[className]}>
      {repeatElement(<div />, extraDivsAmount)}
    </div>
  );
};

Spinner.defaultProps = { type: spinnerTypes.DROPS };
Spinner.propTypes = { type: PropTypes.oneOf(spinnerTypes) };

export default Spinner;
