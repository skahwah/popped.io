import React from 'react';
import styled from 'styled-components';
import { mixins } from '@styles';

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
  a {
    ${mixins.inlineLink};
  }
`;

const Footer = () => {
  return (
    <StyledContainer>
            Feeling generous? <a href="https://www.buymeacoffee.com/sanjivkawa">Buy me a coffee <span role="img" aria-label="coffee">☕</span></a>
            <br></br>
            <font size="2">Design Inspired by brittanychiang.com</font>
    </StyledContainer>
  );
};

export default Footer;
