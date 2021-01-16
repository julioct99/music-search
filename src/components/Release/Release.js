import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrayFns from '../../utilities/arrays';

const Release = ({ release }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const sortedTags = () => release.tags?.sort((a, b) => b.count - a.count);
  const getReleaseId = () => release.releases[imgIndex]?.id;

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
      <br />
      {arrayFns.getNElements(release.releases, 10).map((releaseGroup) => (
        <img
          style={{ margin: '1px' }}
          height='50px'
          src={`https://coverartarchive.org/release/${releaseGroup.id}/front`}
          alt=''
        />
      ))}
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
