import styled from 'styled-components';

const ContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .gif__container {
    width: 375px;
    height: 375px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 810px) {
    .gif__container {
      width: 500px;
      height: 500px;
    }
  }
`;

export default ContainerStyled;
