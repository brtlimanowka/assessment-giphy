import React, { useRef, useCallback } from 'react';
import GifItem from './GifItem/GifItem';
import ContainerStyled from './Container.styled';

const Container = ({ gifs, onEndOfPageReached }) => {
  const observer = useRef();
  const lastElementRef = useCallback((element) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onEndOfPageReached();
      }
    });
    if (element) {
      observer.current.observe(element);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerStyled>
      {gifs.map((gif, index) => (
        <GifItem
          key={gif.id}
          forwardRef={gifs.length === index + 1 ? lastElementRef : undefined}
          url={gif.url}
          source={gif.images.original.url}
          description={gif.title}
        />
      ))}
    </ContainerStyled>
  );
};

export default Container;
