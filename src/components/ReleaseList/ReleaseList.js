import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Release from '../Release/Release';

const ReleaseList = ({ releases }) => {
  const [resultLimit, setResultLimit] = useState(5);

  return (
    <div>
      <h2>Releases</h2>
      <span>Max. results: </span>
      <input
        onChange={(event) => {
          setResultLimit(event.target.value);
        }}
        value={resultLimit}
        type='text'
      />
      {releases.splice(0, resultLimit).map((release) => (
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
