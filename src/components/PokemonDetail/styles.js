import styled from 'styled-components/native';
import { FONT } from '../../consts/fonts';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const PokemonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50;
  border-width: 1;
`;

export const Title = styled.Text`
  color: #000;
  font-family: ${FONT.REGULAR};
`;

export const PokeName = styled.Text`
  color: #000;
  font-family: ${FONT.MEDIUM};
  font-size: 20;
`;

export const Image = styled.Image`
  height: 100;
  width: 100;
  margin-bottom: 30;
  align-self: center;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const EvolutionContainerPhoto = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EvolutionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
