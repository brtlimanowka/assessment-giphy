import React from 'react';
import GifItem from './GifItem/GifItem';
import ContainerStyled from './Container.styled';

const Container = ({ gifs }) => {
  console.log(gifs);
  return (
    <ContainerStyled>
      {gifs.map((gif) => (
        <GifItem
          key={gif.id}
          url={gif.url}
          source={gif.images.fixed_height.url}
          description={gif.title}
        />
      ))}
    </ContainerStyled>
  );
};

export default Container;
