import styled from 'styled-components';

const SpinnerStyled = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 15px auto;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
  i {
    font-size: 25px;
    color: ${(props) => props.theme.colors.spinner};
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerStyled;
