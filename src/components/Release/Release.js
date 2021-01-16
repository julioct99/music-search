import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ release }) => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h3>{`${release.title} - ${release['artist-credit'][0].name}`}</h3>
      <img
        width='300px'
        src={`https://coverartarchive.org/release/${release.releases[0].id}/front`}
        alt='Cover'
      />
      {/* <p>{JSON.stringify(release.releases, null, 4)}</p> */}
    </div>
  );
};

Release.defaultProps = {
  release: {},
};

Release.propTypes = {
  release: PropTypes.objectOf(PropTypes.object),
};

export default Release;
