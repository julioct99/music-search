import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Artist from '../Artist/Artist';
import { getNElements } from '../../utilities/arrays';

const ArtistList = ({ artists }) => {
  const [resultSize, setResultSize] = useState(5);

  return (
    <div>
      <h2>Artists</h2>
      <span>Max. results to show: </span>
      <input
        onChange={(event) => {
          setResultSize(event.target.value);
        }}
        value={resultSize}
        type='number'
      />
      {getNElements(artists, resultSize).map((artist) => (
        <Artist artist={artist} key={artist.id} />
      ))}
    </div>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtistList;
