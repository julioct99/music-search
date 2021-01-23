import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

const GeneralSearch = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const onInputChange = (event) => setSearch(event.target.value);

  return (
    <form onSubmit={(event) => onSearch(event, search)}>
      <Input
        changed={onInputChange}
        placeholder='Artist / Release'
        type='search'
        size='l'
        textCenter
      />
      <Button submit>Search</Button>
    </form>
  );
};

GeneralSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default GeneralSearch;
