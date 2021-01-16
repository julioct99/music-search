import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h3>{`${artist.name} (${artist.type}), ${artist.country}. `}</h3>
      <i>{`${artist.disambiguation ? artist.disambiguation : ''}`}</i>
      {/* <p>{JSON.stringify(artist, null, 4)}</p> */}
    </div>
  );
};

Artist.defaultProps = {
  artist: {},
};

Artist.propTypes = {
  artist: PropTypes.objectOf(PropTypes.object),
};

export default Artist;
