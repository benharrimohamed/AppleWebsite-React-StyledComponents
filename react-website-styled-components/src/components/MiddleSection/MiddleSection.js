import React from 'react'
import {Root,
        Row,
        Column,
        BubblePanel,
        BubbleParagraphe,
        BubbleDescription,
        BubbleHeadLine,
        BubbleImgWarpper,
        BubbleImage}  from './MiddleSection.elements'
import {tip1 , tip2, tip3 , tip4,tip5,tip6,Bubble7} from './Data'
import {Slide,Zoom} from 'react-reveal';

const MiddleSection = (props) => {
    const {tip1,tip2,tip3,tip4,tip5,tip6} = props
    return (
        <React.Fragment>
            <Root>
            <Row>
                <Column>
                <Slide left>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip1.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip1.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{tip1.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Slide>
                </Column>
                <Column>
                <Zoom top>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip2.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip2.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{tip2.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Zoom>
                </Column>
                <Column>
                <Slide bottom>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip3.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip3.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{tip3.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Slide>
                </Column>
                <Column>
                <Zoom bottom>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip4.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip4.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{tip4.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Zoom>
                </Column>
                <Column>
                <Zoom Top>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip5.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip5.HeadLine} </BubbleHeadLine>
                            <BubbleParagraphe>{tip5.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Zoom>
                </Column>
                <Column>
                <Slide right>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={tip6.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{tip6.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{tip6.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Slide>
                </Column>
            </Row>
            </Root>
        </React.Fragment>
    )
}

export default MiddleSection
