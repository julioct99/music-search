import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getNElements } from '../../shared/utilities/arrays';

import Release from '../Release/Release';
import Input from '../Input/Input';

import styles from './ReleaseList.module.scss';

const ReleaseList = ({ releases }) => {
  const [resultSize, setResultSize] = useState(15);

  const sortedReleases = () => releases.sort((a, b) => b.count - a.count);
  const onMaxResultsInputChange = (event) => setResultSize(event.target.value);

  return (
    <div className={styles.ReleaseList}>
      <h2>Releases</h2>
      <span>Max. results to show: </span>
      <Input
        changed={onMaxResultsInputChange}
        type='number'
        size='s'
        placeholder={resultSize}
        textCenter
      />
      {getNElements(sortedReleases(), resultSize).map((release) => (
        <Release release={release} key={release.id} />
      ))}
    </div>
  );
};

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReleaseList;
