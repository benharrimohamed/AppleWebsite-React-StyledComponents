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
import {Bubble1 , Bubble2, Bubble3 , Bubble4,Bubble5,Bubble6,Bubble7} from './Data'
import Zoom from 'react-reveal/Zoom';

const MiddleSection = () => {
    return (
        <React.Fragment>
            <Root>
            <Row>
                <Column>
                <Zoom bottom>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble1.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble1.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{Bubble1.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Zoom>
                </Column>
                <Column>
                <Zoom bottom>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble2.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble2.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{Bubble2.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Zoom>
                </Column>
                <Column>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble3.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble3.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{Bubble3.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Column>
                <Column>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble4.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble4.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{Bubble4.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Column>
                <Column>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble5.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble5.HeadLine} </BubbleHeadLine>
                            <BubbleParagraphe>{Bubble5.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Column>
                <Column>
                    <BubblePanel>
                        <BubbleImgWarpper>
                            <BubbleImage src={Bubble6.ImageURL}/>
                        </BubbleImgWarpper>
                        <BubbleDescription>
                            <BubbleHeadLine>{Bubble6.HeadLine}</BubbleHeadLine>
                            <BubbleParagraphe>{Bubble6.Paragraph}</BubbleParagraphe>
                        </BubbleDescription>
                    </BubblePanel>
                </Column>
            </Row>
            </Root>
        </React.Fragment>
    )
}

export default MiddleSection
