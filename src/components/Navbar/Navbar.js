import React, { useEffect, useState } from 'react';
import NavbarStyled from './Navbar.styled.';
import { DebounceInput } from 'react-debounce-input';
import giphyLogo from '../../assets/images/Giphy-logo.svg';

const Navbar = ({ onQuery }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const queryUpdatedHandler = (e) => {
    setQuery(e.target.value);
  };

  const clearQueryClickedHandler = () => {
    setQuery('');
  };

  return (
    <NavbarStyled>
      <img src={giphyLogo} alt='Giphy Logo' />
      <div className='navbar__search'>
        <DebounceInput
          id='navbar__query'
          type='text'
          value={query}
          name='query'
          maxLength='32'
          placeholder='Type something...'
          debounceTimeout={500}
          onChange={queryUpdatedHandler}
        />
        <i
          title='Clear search'
          className={`fa fa-solid fa-rotate-left ${query ? 'enabled' : ''}`}
          onClick={clearQueryClickedHandler}></i>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
