import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrayFns from '../../utilities/arrays';

const Release = ({ release }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [showAltCovers, setShowAltCovers] = useState(false);

  const sortedTags = () => release.tags?.sort((a, b) => b.count - a.count);
  const getReleaseId = () => release.releases[imgIndex]?.id;
  const toggleShowAltCovers = () => setShowAltCovers(!showAltCovers);
  const getAltCovers = () => {
    if (showAltCovers) {
      return arrayFns
        .getNElements(release.releases, 30)
        .map((releaseGroup, index) =>
          index === imgIndex ? null : (
            <img
              style={{ margin: '1px' }}
              height='50px'
              src={`https://coverartarchive.org/release/${releaseGroup.id}/front`}
              alt=''
            />
          )
        );
    }
    return null;
  };

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
        onError={() => setImgIndex(imgIndex + 1)}
        src={`https://coverartarchive.org/release/${getReleaseId()}/front`}
        alt=''
      />
      <div>
        {sortedTags()?.map((tag) => (
          <span>{`${tag.name}, `}</span>
        ))}
      </div>
      {/* <p>{JSON.stringify(release.releases, null, 4)}</p> */}
      <button onClick={toggleShowAltCovers} type='button'>
        {showAltCovers ? 'Hide alternative covers' : 'Show alternative covers'}
      </button>
      <br />
      {getAltCovers()}
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
