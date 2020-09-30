import styled from 'styled-components'
import {FaReact} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Container,button} from '../../gStyles'

export const Nav = styled.nav`
background-color : #e0e0e0;
display : flex;
z-index : 99;
justify-content : center;
align-items : center;
height : 60px;
font-size:1.2em;
position:sticky;
top: 0;
`

export const NavBarContainer = styled(Container)`
display : flex;
justify-content : space-between;
height :60px;
align-items: center;

${Container}
`

export const NavLogo = styled(Link)`
font-size:1.8em;
text-decoration : none;
display: flex;
justify-self: flex-start;
align-items:center;
color : #fff;
`

export const NavIcon = styled(FaReact)`
margin-left:0;
color: #f5f5f7;

&:hover {
color: #fff;
}

`

export const MobileIcon = styled.div`
display : none;

@media screen and (max-width : 960px) {

    display : block;
    position: absolute;
    top:0;
    right:0;
    font-size:1.8em;
    cursor: pointer;
    transform : translate(-100%, 30%)
}
`

export const NavMenu = styled.ul`
display : flex;
list-style: none;
align-items : center;
text-align:center;

@media screen and (max-width: 960px) {
display: flex;
flex-direction : column ;
width : 60%;
height : 100vh;
position : absolute;
top:0;
left : ${({openMobileMenu}) => (openMobileMenu ? 0 : '-100%' )};
opacity : 1;
transition : all 0.2s ease-in;
background : #1d1d1f;
}
`



export const NavItem = styled.li``

export const NavLink = styled(Link)`
color : #535461;
display : flex;
align-items: center;
text-decoration: none;
padding :0.5rem 1rem;
height : 100%;
font-size:.8em;

@media screen and (max-width : 960px) {
text-align : center;
padding : 2rem;
width : 100%auto;
display : table;

&:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
}
}
`

export const NavItemBtn = styled.li`
@media screen and (max-width:960px) {
    display : flex;
    justify-content: center;
    align-items : center;
    width : 100%;
    height : 120px;
}
`

export const NavBtnLink = styled(Link)`
display : flex;
justify-content : center;
align-items: center;
text-decoration : none;
padding :8px 16px;
height:100%;
width:100%;
outline : none;
`