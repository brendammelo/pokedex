import styled from 'styled-components/native';
import { TYPE_COLORS } from '../../consts/TypeColors';
import { FONT } from '../../consts/fonts';

const handleTypeColor = type => {
  console.log(type, 'TYPE CSS');
  switch (type) {
  case 'water':
      return TYPE_COLORS.WATER_BADGE;
  case 'grass':
    return TYPE_COLORS.GRASS_BADGE;
  case 'fire':
    return TYPE_COLORS.FIRE_BADGE;
  case 'ice':
      return TYPE_COLORS.ICE;
  case 'bug':
      return TYPE_COLORS.BUG;
  case 'earth':
    return TYPE_COLORS.EARTH_BADGE;
  case 'fairy':
      return TYPE_COLORS.FAIRY;
  case 'rock':
      return TYPE_COLORS.ROCK;
  case 'dragon':
      return TYPE_COLORS.DRAGON;
  case 'dark':
    return TYPE_COLORS.DARK;
  case 'normal':
      return TYPE_COLORS.NORMAL;
  case 'fighter':
      return TYPE_COLORS.FIGHTER;
  case 'poison':
    return TYPE_COLORS.POISON;
  case 'ghost':
      return TYPE_COLORS.GHOST;
  case 'psychic':
      return TYPE_COLORS.PSYCHIC;
  case 'steel':
      return TYPE_COLORS.STEEL;
  case 'flying':
    return TYPE_COLORS.FLYING;
  case 'thunder':
      return TYPE_COLORS.THUNDER;
  default:
    return '#000';
  }
};

export const Container = styled.View`
  height: 25;
  width: 100;
  border-radius: 40;
  background-color: ${({ color }) => handleTypeColor(color)};
  justify-content: center;
  align-items: center;
`;

export const TypeName = styled.Text`
  color: #fff;
  text-transform: capitalize;
  font-family: ${FONT.REGULAR};
`;
