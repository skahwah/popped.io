import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

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
            Feeling generous? <a href="https://www.buymeacoffee.com/sanjivkawa">Buy me a coffee ☕</a>
    </StyledContainer>
  );
};

export default Footer;
