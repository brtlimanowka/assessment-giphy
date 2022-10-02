import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  top: 0;
  position: sticky;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  height: 130px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
  img {
    height: 50px;
    margin-right: 30px;
  }
  .navbar__search {
    display: flex;
    align-items: center;
    margin-top: 20px;
    input {
      height: 25px;
      width: 300px;
      margin-right: 10px;
      outline: none;
    }
    i {
      font-size: 20px;
      color: ${(props) => props.theme.colors.background};
      &.enabled {
        color: ${(props) => props.theme.colors.icon};
        cursor: pointer;
      }
    }
  }

  @media (min-width: 810px) {
    flex-direction: row;
    justify-content: initial;
    height: 80px;
    padding-left: 80px;

    .navbar__search {
      margin-top: initial;
    }
  }
`;

export default NavbarStyled;
