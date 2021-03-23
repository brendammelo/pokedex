import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, TypeName } from './styles';

const Type = ({ type }) => {
  console.log(type);
  return (
    <Container color={type}>
      <TypeName>{type}</TypeName>
    </Container>
  );
};

export default Type;
