import React from 'react';
import PropTypes from 'prop-types';
import Release from '../Release/Release';

const ReleaseList = ({ releases }) => {
  return (
    <div>
      <h2>Releases</h2>
      {releases.map((release) => (
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
