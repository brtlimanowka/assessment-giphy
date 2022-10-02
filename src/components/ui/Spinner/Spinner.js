import React from 'react';
import SpinnerStyled from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerStyled>
      <i className='fas fa-solid fa-spinner'></i>
    </SpinnerStyled>
  );
};

export default Spinner;
