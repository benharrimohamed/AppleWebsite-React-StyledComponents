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
padding-left:50px;


@media screen and (max-width:991) {
    padding-right :30px;
    padding-left:30px
} 
`

export const button = styled.button`
border-radius : 4px;
background : '#0467FB';
white-space: nowrap;
color: '#fff';
font-size : '16px';
outline : none;
border:none;
cursor: pointer;

&:hover {
    transition : all 0.3s ease-in;
    background : #fff;

}

@media screen and (max-width : 960px)
{
    width: 100%;
}
`





export default GlobalStyle