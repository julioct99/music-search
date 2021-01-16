import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Artist from '../Artist/Artist';

const ArtistList = ({ artists }) => {
  const [resultLimit, setResultLimit] = useState(5);

  return (
    <div>
      <h2>Artists</h2>
      <span>Max. results: </span>
      <input
        onChange={(event) => {
          setResultLimit(event.target.value);
        }}
        value={resultLimit}
        type='text'
      />
      {artists.splice(0, resultLimit).map((artist) => (
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
