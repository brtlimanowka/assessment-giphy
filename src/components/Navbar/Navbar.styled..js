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
    margin-right: 10px;
    outline: none;
  }

  i {
    height: 25px;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.theme.colors.background};
    &.enabled {
      color: ${(props) => props.theme.colors.icon};
      cursor: pointer;
    }
  }

  @media (min-width: 375px) {
    justify-content: initial;
    padding-left: 80px;
  }
`;

export default NavbarStyled;
