import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};

  img {
    height: 50px;
    margin-right: 30px;
  }

  input {
    height: 25px;
    width: 300px;
    outline: none;
  }

  @media (min-width: 810px) {
    justify-content: initial;
    padding-left: 80px;
  }
`;

export default NavbarStyled;
