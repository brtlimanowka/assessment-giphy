import React from 'react';
import ErrorCardStyled from './ErrorCard.styled';

const ErrorCard = ({ errorMessage }) => {
  return (
    <ErrorCardStyled>
      <h1>Something went wrong</h1>
      <p>
        <label>Error message: </label>
        <span>{errorMessage}</span>
      </p>
    </ErrorCardStyled>
  );
};

export default ErrorCard;
