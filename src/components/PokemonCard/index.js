import React from 'react';
import { View, Text, Image } from 'react-native';
import { SQUIRTLE } from '../../assets';

import {
  Container,
  PokemonContainer,
  TypeContainer,
  EvolutionContainer,
} from './styles';

const PokemonCard = () => {
  return (
    <Container>
      <PokemonContainer>
        <Text>Squirtle</Text>
        <Text># 002</Text>
      </PokemonContainer>
      <Image source={SQUIRTLE} style={{ height: 100, width: 100 }} />
      <TypeContainer>
        <Text>Ghost</Text>
        <Text>Poison</Text>
        <Text>asd</Text>
      </TypeContainer>
      <View>
        <Text>Info 1</Text>
        <Text>Info 2</Text>
        <Text>Info 3</Text>
      </View>
      <Text>Evolution</Text>
      <EvolutionContainer>
        <Text>Gastly</Text>
        <Text>Haunter</Text>
        <Text>Gengar</Text>
      </EvolutionContainer>
      <View>
        <Text>Gastly</Text>
        <Text>Haunter</Text>
        <Text>Gengar</Text>
      </View>
    </Container>
  );
};

export default PokemonCard;
