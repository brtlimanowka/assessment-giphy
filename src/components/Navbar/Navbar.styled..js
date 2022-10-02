import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 80px;
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
`;

export default NavbarStyled;
