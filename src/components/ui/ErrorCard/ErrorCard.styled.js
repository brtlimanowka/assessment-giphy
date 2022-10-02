import styled from 'styled-components';

const ErrorCardStyled = styled.main`
  width: 300px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${(props) => props.theme.colors.errorBackground};
  h1 {
    font-size: 220%;
  }
  p {
    font-size: 160%;
    span {
      border-bottom: 1px solid ${(props) => props.theme.colors.errorBackground};
    }
  }
`;

export default ErrorCardStyled;
