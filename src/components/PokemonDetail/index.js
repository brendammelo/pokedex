import React from 'react';
import { View, Text } from 'react-native';
import { SQUIRTLE } from '../../assets';
import TypeComponent from '../Type';
import Divider from '../Divider';

import {
  Container,
  PokemonContainer,
  TypeContainer,
  EvolutionContainer,
  EvolutionContainerPhoto,
  Info,
  Image,
  Title,
  PokeName,
} from './styles';

const PokemonCard = () => {
  return (
    <Container>
      <PokemonContainer>
        <PokeName>Squirtle</PokeName>
        <Title># 002</Title>
      </PokemonContainer>
      <Image source={SQUIRTLE} />
      <TypeContainer>
        <TypeComponent type="water" />
        <TypeComponent type="ghost" />
      </TypeContainer>
      <Info>
        <Text>Info 1</Text>
        <Text>Info 2</Text>
        <Text>Info 3</Text>
      </Info>
      <Text>Evolution</Text>
      <EvolutionContainerPhoto>
        <Divider />
      </EvolutionContainerPhoto>
      <EvolutionContainer>
        <Text>Gastly</Text>
        <Text>Haunter</Text>
        <Text>Gengar</Text>
      </EvolutionContainer>
    </Container>
  );
};

export default PokemonCard;
