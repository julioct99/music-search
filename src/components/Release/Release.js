import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getNElements } from '../../shared/utilities/arrays';

import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import Card from '../Card/Card';

const Release = ({ release }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [showAltCovers, setShowAltCovers] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const sortedTags = () => release.tags?.sort((a, b) => b.count - a.count);

  const getReleaseId = () => release.releases[imgIndex]?.id;

  const toggleShowAltCovers = () => setShowAltCovers(!showAltCovers);

  const getReleaseYear = () => {
    const year = release['first-release-date']?.split('').splice(0, 4).join('');
    return year ? `(${year})` : '';
  };

  const tryNextCover = () => {
    setImgIndex(imgIndex + 1);
    // If there are no more releases to try, image is set as loaded to stop the spinner
    if (imgIndex === release.releases.length) setImgLoaded(true);
  };

  const getAltCovers = () => {
    if (showAltCovers) {
      return getNElements(release.releases, 30).map((releaseGroup, index) =>
        index === imgIndex ? null : (
          <img
            style={{ margin: '1px' }}
            height='75px'
            src={`https://coverartarchive.org/release/${releaseGroup.id}/front-250`}
            alt=''
          />
        )
      );
    }
    return null;
  };

  return (
    <Card>
      {imgLoaded ? null : <Spinner type='drops' />}
      <img
        width='300px'
        onError={tryNextCover}
        onLoad={() => setImgLoaded(true)}
        src={`https://coverartarchive.org/release/${getReleaseId()}/front-250`}
        style={imgLoaded ? {} : { display: 'none' }}
        alt=''
      />
      <h3 style={{ display: 'inline' }}>
        {`${release.title} ${getReleaseYear()}`}
      </h3>
      <span> by </span>
      <h3 style={{ display: 'inline' }}>
        {`${release['artist-credit'][0].name}`}
      </h3>
      <br />
      <br />

      <div>
        {sortedTags()?.map((tag) => (
          <span>{`${tag.name}, `}</span>
        ))}
      </div>
      <Button clicked={toggleShowAltCovers} size='s'>
        {showAltCovers ? 'Hide alternative covers' : 'Show alternative covers'}
      </Button>
      <br />
      {getAltCovers()}
    </Card>
  );
};

Release.propTypes = {
  release: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Release;
