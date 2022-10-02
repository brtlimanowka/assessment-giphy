import React, { useEffect, useState } from 'react';
import NavbarStyled from './Navbar.styled.';
import giphyLogo from '../../assets/images/Giphy-logo.svg';

const Navbar = () => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    // update query
  }, []);

  return (
    <NavbarStyled>
      <img src={giphyLogo} alt='Giphy Logo' />
      <input
        type='text'
        name='query'
        id='navbar__query'
        maxLength='32'
        placeholder='Type something...'
      />
      <i className='fa fa-solid fa-rotate-left'></i>
    </NavbarStyled>
  );
};

export default Navbar;
