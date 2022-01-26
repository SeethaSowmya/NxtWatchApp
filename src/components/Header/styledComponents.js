import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 30px;
  padding-right: 20px;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  height: 50px;
`
export const ListItems = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`
export const LogoutButton = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  background-color: black;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HamburgerIconButton = styled.button`
  background-color: transparent;
  width: 42px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: transparent;
  max-width: 458px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`

export const NavLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  list-style-type: none;
  background-color: white;
`

export const NavLinkItem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export default styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.2;
  margin: 0px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const MoonButton = styled.button`
  background-color: blue;
  border-width: 0px;
  color: #ffffff;
`
export const WebButton = styled.button`
  border-width: 0px;
`
export const Profile = styled.img`
  width: 20px;
  height: 20px;
`

export const NavLinkContent = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.2;
  margin: 0px;
  margin-left: 8px;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
