import styled from 'styled-components'
import {FaApple} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Container,button} from '../../gStyles'

export const Nav = styled.nav`
background-color : #212121;
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
color : #fff;
font-size:2em;
text-decoration : none;
display: flex;
justify-self: flex-start;
align-items:center;
color : #fff;
`

export const NavIcon = styled(FaApple)`
margin-left:0;
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
align-items: center;
width : 100%;
height : 90vh;
position : absolute;
top:60px;
left : ${({openMobileMenu}) => (openMobileMenu ? 0 : '-100%' )};
opacity : 1;
transition : all 0.2s ease-in;
background : #101522;
}
`



export const NavItem = styled.li`

border-bottom : 1px solid transparent;

&:hover{
    border-bottom : 2px solid #4b59f7;
}

@media screen and (max-width: 960px ) {
    width:100%;
    &:hover {
        border: none;
    }
}
`

export const NavLink = styled(Link)`
color : #fff;
display : flex;
align-items: center;
text-decoration: none;
padding :0.5rem 1rem;
height : 100%;

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

export const Button = styled(button)`

`