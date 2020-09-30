import styled from 'styled-components'


export const LandingSec = styled.div`
background : #fff;
padding : 160px 0;
`


export const SectionRow = styled.div`
display : flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction : ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
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
    max-width:100%none;
    display:flex;
    justify-content:center;
}
`




