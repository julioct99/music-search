import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GeneralSearch = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  return (
    <form onSubmit={(event) => onSearch(event, search)}>
      <input
        placeholder='General search'
        onChange={(e) => setSearch(e.target.value)}
        type='search'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

GeneralSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default GeneralSearch;
