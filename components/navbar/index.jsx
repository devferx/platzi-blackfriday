import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import {
  NavStyled,
  NavLogo,
  LogoImage,
  LogoText,
  NavActions,
  NavLinks,
  NavLink,
  BuyAction,
  LoginButton,
} from './styles'

export const Navbar = () => {
  const { links } = useContext(dataContext)
  return (
    <NavStyled>
      <NavLogo>
        <LogoImage src="./images/platzi_logo.webp" alt="platzi_logo" />
        <LogoText src="./images/platzi.svg" alt="platzi" />
      </NavLogo>
      <NavActions>
        <NavLinks>
          {links.map((link) => (
            <NavLink key={link.name}>
              <a href={link.link}>{link.name}</a>
            </NavLink>
          ))}
        </NavLinks>
        <BuyAction>Iniciar mi plan</BuyAction>
        <LoginButton type="button">Iniciar sesión</LoginButton>
      </NavActions>
    </NavStyled>
  )
}
