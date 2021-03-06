import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

const Artist = ({ artist }) => {
  const sortedTags = () => artist.tags?.sort((a, b) => b.count - a.count);

  return (
    <Card>
      <h3>{`${artist.name} (${artist.type}), ${artist.country}. `}</h3>
      <i>{`${artist.disambiguation ? artist.disambiguation : ''}`}</i>
      <div>
        {sortedTags()?.map((tag) => (
          <span>{`${tag.name}, `}</span>
        ))}
      </div>
      {/* <p>{JSON.stringify(artist, null, 4)}</p> */}
    </Card>
  );
};

Artist.propTypes = {
  artist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Artist;
