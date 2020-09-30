import React,{useState} from 'react'
import {Button} from '../../gStyles'
import {
    Nav,
    NavBarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtnLink,
    NavItemBtn} from './NavBar.elements'
import {FaTimes , FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

export const NavBar = () => {
    
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const handleOpenMobileMenu = () => setOpenMobileMenu(!openMobileMenu) 

    const [button,setButton] = useState(true);
    const showButton = () => setButton(false);


    return (
        <React.Fragment>
          <IconContext.Provider value={{color : '#535461'}}>
          <Nav>
              <NavBarContainer>
                  <NavLogo>
                      <NavIcon/>
                  </NavLogo>
                  <MobileIcon onClick={handleOpenMobileMenu} openMobileMenu={openMobileMenu}>
                  {openMobileMenu ? <FaTimes /> : <FaBars/>}
                  </MobileIcon>
                    <NavMenu onClick={handleOpenMobileMenu} openMobileMenu={openMobileMenu}>
                      <NavItem>
                          <NavLink to='/' exact>
                              Home
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='/mac' exact>
                              Tips
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='/iphone' exact>
                             Technologies
                          </NavLink>
                      </NavItem>
                  </NavMenu>
              </NavBarContainer>
          </Nav>
          </IconContext.Provider>
        </React.Fragment>
    )
}
