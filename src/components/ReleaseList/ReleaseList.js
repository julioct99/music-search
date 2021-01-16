import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Release from '../Release/Release';
import arrayFns from '../../utilities/arrays';

const ReleaseList = ({ releases }) => {
  const [resultSize, setResultSize] = useState(15);

  const sortedReleases = () => releases.sort((a, b) => b.count - a.count);

  return (
    <div>
      <h2>Releases</h2>
      <span>Max. results to show: </span>
      <input
        onChange={(event) => {
          setResultSize(event.target.value);
        }}
        value={resultSize}
        type='number'
      />
      {arrayFns.getNElements(sortedReleases(), resultSize).map((release) => (
        <Release release={release} key={release.id} />
      ))}
    </div>
  );
};

ReleaseList.defaultProps = {
  releases: [],
};

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.object),
};

export default ReleaseList;
