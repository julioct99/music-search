import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getNElements } from '../../shared/utilities/arrays';

import Artist from '../Artist/Artist';
import Input from '../Input/Input';

import styles from './ArtistList.module.scss';

const ArtistList = ({ artists }) => {
  const [resultSize, setResultSize] = useState(5);

  const onMaxResultsInputChange = (event) => setResultSize(event.target.value);

  return (
    <div className={styles.ArtistList}>
      <h2>Artists</h2>
      <span>Max. results to show: </span>
      <Input
        changed={onMaxResultsInputChange}
        type='number'
        size='s'
        placeholder={resultSize}
        textCenter
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
