import styled from 'styled-components'


export const Root = styled.div`
padding : 80px;
background-color:#F2F2F2;
color:#fff;
@media screen and (max-width:900px){
padding:60px 0px;
}
`

export const Row = styled.div`
display : flex;
flex-direction : row;
flex-wrap: wrap;
align-items: center;
@media screen and (max-width:900px){
margin-top:5px;
align-items:center;
}
`
export const Column = styled.div`
margin-bottom: 10px;
padding-right:10px;
padding-left:10px;
margin:10px;
flex :1;
max-width : 30%;
flex-basis : 30%;

@media screen and (max-width:1300px) {
    flex-basis : 100%;
    max-width:100%;
    display:flex;
    justify-content:center;
}
`

export const BubblePanel = styled.div`
background-color : #fff;
color: #000;
border: 1px solid #535461;
max-width:400px;
width:350px;
border-radius : 10px;
overflow: hidden;

@media screen and (max-width:768px){
 width :100%;   
}
`

export const BubbleImgWarpper = styled.div`
padding : 50px;
background-color:#535461;
`

export const BubbleDescription = styled.div`
display: flex;
flex-direction : column;
padding:15px;
`

export const BubbleHeadLine = styled.h3`
font-size: 1.5em;
margin-bottom:20px;
line-height:1;
color:#FD5692;
`

export const BubbleParagraphe = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color: #1d1d1f;
`

export const BubbleImage = styled.img`
padding-right :0;
border :0;
max-width: 100%;
vertical-align : middle;
display : inline-block;
max-height:300px;
`