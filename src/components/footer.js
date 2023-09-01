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
            <font size="2">Design Inspired by brittanychiang.com</font>
    </StyledContainer>
  );
};

export default Footer;
