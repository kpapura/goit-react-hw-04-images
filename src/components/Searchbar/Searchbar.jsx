import { useState } from 'react';
import PropTypes from 'prop-types'

import {
  Button,
  ButtonLabel,
  Input,
  SearchBar,
  SearchForm,
} from './Searchbar.styled';

function Searchbar({ url, handleSearch }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') return;
    handleSearch(value);
    setValue('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <img src={url} alt="" width="25px" />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
}

SearchBar.propType = {
  url: PropTypes.string.isRequired,
  onImageClose: PropTypes.func.isRequired
}
export default Searchbar;
