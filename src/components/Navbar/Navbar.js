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
      <input type='text' name='' id='' placeholder='Type something...' />
    </NavbarStyled>
  );
};

export default Navbar;
