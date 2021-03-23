import React from 'react';
import { View } from 'react-native';

import { Container, UpperText, DownText, InsiderContainer } from './styles';

const Divider = () => {
  return (
    <Container>
      <InsiderContainer>
        <UpperText>Gastly</UpperText>
        <DownText># 092</DownText>
      </InsiderContainer>
      <InsiderContainer>
        <UpperText>Haunter</UpperText>
        <DownText># 093</DownText>
      </InsiderContainer>
      <InsiderContainer>
        <UpperText>Gengar</UpperText>
        <DownText># 094</DownText>
      </InsiderContainer>
      <UpperText />
    </Container>
  );
};

export default Divider;
