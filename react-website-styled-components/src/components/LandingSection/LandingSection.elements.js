import styled from 'styled-components'
import {FaApple} from 'react-icons/fa'


export const AppleIcon = styled(FaApple)`
`

export const LandingSec = styled.div`
background : #fff;
padding : 80px 0;
`


export const SectionRow = styled.div`
display : flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction : ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

@media screen and (max-width:786px){
margin-top:5px;
}

`


export const SectionColumn = styled.div`
margin-bottom: 15px;
padding-right:15px;
padding-left:15px;
flex :1;
max-width : 50%;
flex-basis : 50%;

@media screen and (max-width:760px) {
    flex-basis : 100%;
    max-width:100%;
    display:flex;
    justify-content:center;
}
`

export const TextWarpper = styled.div`
max-width : 540px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width: 768px){
    padding-bottom : 65px; 
}
`

export const TopLine = styled.div`
color : #1d1d1f;
font-size : 18px;
line-height : 16px;
letter-spacing:1.4px;
margin-bottom:16px;
font-weight : bold;
display: flex;
flex-direction: row;
align-items: center;
`

export const HeadLine = styled.h1`
margin-bottom : 24px;
font-size:48px;
line-height : 1.1;
color :#1d1d1f;
`

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color: #1d1d1f;
` 
export const ImgWarpper = styled.div`
max-width:555px;
display:flex;
justify-content :${({start}) => (start ? 'flex-satrt' : 'flex-end')};
`

export const Img = styled.img`
padding-right :0;
border :0;
max-width: 100%;
vertical-align : middle;
display : inline-block;
max-height:500px;
`



