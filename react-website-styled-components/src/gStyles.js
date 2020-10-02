import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding : 0;
    font-family : 'Lato';
    box-sizing : border-box;
}

`

export const Container = styled.div`
width:100%;
max-width:1300px;
margin-left:auto;
margin-right : auto;
z-index:1;
padding-right:50px;
padding-left:20px;


@media screen and (max-width:991) {
    padding-right :30px;
    padding-left:30px
} 
`

export const Button = styled.button`
display : ${({display}) => (display ? 'normal' : 'none')};
border-radius : 4px;
background : #FD5692;
white-space: nowrap;
color: #fff;
padding : ${({big}) => (big ? '12px 64px' : '10px 20px')};
font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline : none;
border:none;
cursor: pointer;

&:hover {
    transition : all 0.2s ease-in;
    background : #F15692; 
}

@media screen and (max-width : 960px)
{
    width: 100%;
}
`





export default GlobalStyle