import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ release }) => {
  const sortedTags = () => release.tags?.sort((a, b) => b.count - a.count);

  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '15px',
        margin: '15px auto',
        maxWidth: '800px',
      }}
    >
      <h3>{`${release.title} - ${release['artist-credit'][0].name}`}</h3>
      <img
        width='250px'
        src={`https://coverartarchive.org/release/${release.releases[0].id}/front`}
        alt='Cover'
      />
      <div>
        {sortedTags()?.map((tag) => (
          <span>{`${tag.name}, `}</span>
        ))}
      </div>
      {/* <p>{JSON.stringify(release, null, 4)}</p> */}
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
