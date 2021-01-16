import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../Artist/Artist';

const ArtistList = ({ artists }) => {
  return (
    <div>
      <h2>Artists</h2>
      {artists.map((artist) => (
        <Artist artist={artist} key={artist.id} />
      ))}
    </div>
  );
};

ArtistList.defaultProps = {
  artists: [],
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object),
};

export default ArtistList;
