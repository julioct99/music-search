import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CompositeSearch = ({ onSearch }) => {
  const [artistSearch, setArtistSearch] = useState('');
  const [releaseSearch, setReleaseSearch] = useState('');

  return (
    <form onSubmit={(event) => onSearch(event, artistSearch, releaseSearch)}>
      <input
        onChange={(e) => setReleaseSearch(e.target.value)}
        placeholder='Album, single, EP...'
        type='search'
      />
      <span> by </span>
      <input
        onChange={(e) => setArtistSearch(e.target.value)}
        placeholder='Artist'
        type='search'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

CompositeSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default CompositeSearch;
