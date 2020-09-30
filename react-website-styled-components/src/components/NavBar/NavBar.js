import React,{useState} from 'react'
import {Nav,NavBarContainer,NavLogo,NavIcon, MobileIcon,NavMenu,NavItem,NavLink,Button} from './NavBar.elements'
import {FaTimes , FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

export const NavBar = () => {
    
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const handleOpenMobileMenu = () => setOpenMobileMenu(!openMobileMenu) 


    return (
        <React.Fragment>
          <IconContext.Provider value={{color : '#fff'}}>
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
                          <NavLink to='/services' exact>
                              Services
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='/about' exact>
                             About
                          </NavLink>
                      </NavItem>
                      <NavItemBtn>
                          {button ? (<NavBtnLink to="/sign-up">
                              <Button>Sign Up</Button>
                          </NavBtnLink>) : (
                             <NavBtnLink to="/sign-up">
                                 <Button>Sign up</Button>
                             </NavBtnLink>
                          )
                          }
                      </NavItemBtn>
                  </NavMenu>

              </NavBarContainer>
          </Nav>
          </IconContext.Provider>
        </React.Fragment>
    )
}
