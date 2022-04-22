import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { FooterDiv } from './All.styled';

function Footer() {
    const {theme} = useContext(ThemeContext);
  return (
      <FooterDiv color={theme}>
      <h1>Footer Here</h1>   
    </FooterDiv>
  )
}

export default Footer
