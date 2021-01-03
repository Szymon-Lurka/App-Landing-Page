import React from 'react'
import {
    StyledWrapper,
    StyledHeadingWrapper,
    StyledCardWrapper,
    StyledCard,
    StyledCardHeading,
    StyledCardDescription,
    StyledPrice,
} from './PriceListStyles';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';

const PriceList = () => {
    return (
        <StyledWrapper>
            <StyledHeadingWrapper>
                <HeroHeading text="Get awesome features, without extra charges" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook." />
            </StyledHeadingWrapper>
            <StyledCardWrapper>
                <StyledCard>
                    <StyledCardHeading>
                        <StyledPrice>
                            <HeroHeading text="$0" />
                            <Paragraph text="/month" />
                        </StyledPrice>
                        <SecondaryHeading text="Businness Class" />
                        <Paragraph text="For small teams or office" />
                    </StyledCardHeading>
                    <StyledCardDescription>
                        <Paragraph
                            text="Drag & Drop Builder"
                        />
                        <Paragraph
                            text="1,000's of Templates"
                        />
                        <Paragraph
                            text="Blog Support Tools"
                        />
                        <Paragraph
                            text="eCommerce Store"
                        />
                        <Button text="Start free trail" />
                    </StyledCardDescription>
                </StyledCard>
                <StyledCard>
                    <StyledCardHeading>
                        <StyledPrice>
                            <HeroHeading text="$99" />
                            <Paragraph text="/month" />
                        </StyledPrice>
                        <SecondaryHeading text="Pro Master" />
                        <Paragraph text="For best opportunities" />
                    </StyledCardHeading>
                    <StyledCardDescription>
                        <Paragraph
                            text="Drag & Drop Builder"
                        />
                        <Paragraph
                            text="1,000's of Templates"
                        />
                        <Paragraph
                            text="Blog Support Tools"
                        />
                        <Paragraph
                            text="eCommerce Store"
                        />
                        <Button text="Subscribe now" />
                    </StyledCardDescription>
                </StyledCard>
            </StyledCardWrapper>
        </StyledWrapper>
    );
}

export default PriceList;