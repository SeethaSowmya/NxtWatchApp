import Popup from 'reactjs-popup'
import './Header.css'

import {
  NavLinkContent,
  HeaderContainer,
  WebsiteLogo,
  WebButton,
  ListItems,
  LogoutButton,
  Profile,
  MoonButton,
  ModalContainer,
  NavLinksList,
  NavLink,
  NavLinkItem,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <WebButton>
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </WebButton>
    <ListItems>
      <li>
        <MoonButton>dark</MoonButton>
      </li>
      <li>
        <Profile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </li>
      <li>
        <Popup
          modal
          trigger={<LogoutButton>Logout</LogoutButton>}
          className="popup-content"
        >
          {close => (
            <ModalContainer>
              <NavLinksList>
                <NavLinkItem>
                  <NavLink to="/login/" onClick={() => close()}>
                    <NavLinkContent>Confirm</NavLinkContent>
                  </NavLink>
                </NavLinkItem>
              </NavLinksList>
            </ModalContainer>
          )}
        </Popup>
      </li>
    </ListItems>
  </HeaderContainer>
)

export default Header
