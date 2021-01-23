import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './CompositeSearch.module.scss';

const CompositeSearch = ({ onSearch }) => {
  const [artistSearch, setArtistSearch] = useState('');
  const [releaseSearch, setReleaseSearch] = useState('');

  const onReleaseInputChange = (event) => setReleaseSearch(event.target.value);
  const onArtistInputChange = (event) => setArtistSearch(event.target.value);

  return (
    <form
      className={styles.CompositeSearch}
      onSubmit={(event) => onSearch(event, artistSearch, releaseSearch)}
    >
      <Input
        changed={onReleaseInputChange}
        placeholder='Album, single, EP...'
        type='search'
        size='m'
        textCenter
      />
      <span> by </span>
      <Input
        changed={onArtistInputChange}
        placeholder='Artist'
        type='search'
        size='m'
        textCenter
      />
      <Button submit size='m'>
        Search
      </Button>
    </form>
  );
};

CompositeSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default CompositeSearch;
