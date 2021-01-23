import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

const CompositeSearch = ({ onSearch }) => {
  const [artistSearch, setArtistSearch] = useState('');
  const [releaseSearch, setReleaseSearch] = useState('');

  const onReleaseInputChange = (event) => setReleaseSearch(event.target.value);
  const onArtistInputChange = (event) => setArtistSearch(event.target.value);

  return (
    <form onSubmit={(event) => onSearch(event, artistSearch, releaseSearch)}>
      <Input
        changed={onReleaseInputChange}
        placeholder='Album, single, EP...'
        type='search'
        size='m'
      />
      <span> by </span>
      <Input
        changed={onArtistInputChange}
        placeholder='Artist'
        type='search'
        size='m'
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
