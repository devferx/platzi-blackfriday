import styled from '@emotion/styled'

const NavStyled = styled.nav`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
`

const NavLogo = styled.nav`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  width: 25px;
  margin-right: 5px;
`

const LogoText = styled.img`
  height: 19px;
`

const NavActions = styled.menu`
  display: flex;
  align-items: center;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.li`
  a {
    margin-right: 17px;
    font-size: 14px;
    color: #bab9b7;
    font-weight: bold;
    text-decoration: none;
  }
`

const BuyAction = styled.a`
  text-decoration: none;
  color: black;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
`

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background: linear-gradient(270deg, #95ca3e 0, #95ca3e 50%, #85c638);
  box-shadow: 0 1px 1px 0 #58902d;
  color: #03091e;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  transition: 200ms;

  &:active {
    box-shadow: none;
  }
`

export {
  NavStyled,
  NavLogo,
  LogoImage,
  LogoText,
  NavActions,
  NavLinks,
  NavLink,
  BuyAction,
  LoginButton,
}
