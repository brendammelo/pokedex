import React from 'react';
import { View, Text, Image } from 'react-native';
import { SQUIRTLE } from '../../assets';

// import { Container } from './styles';

const PokemonCard = () => {
    return (
    <View>
            <View>
                <Text>Squirtle</Text>
                <Text># 002</Text>
      </View>
        <Image source={SQUIRTLE} style={{ height: 100, width: 100 }} />
            <View>
                <Text>Ghost</Text>
                <Text>Poison</Text>
        <Text>asd</Text>
      </View>
        <View>
              <Text>Info 1</Text>
              <Text>Info 2</Text>
                <Text>Info 3</Text>
            </View>
        <Text>Evolution</Text>
            <View>
        <Text>Gastly</Text>
                <Text>Haunter</Text>
        <Text>Gengar</Text>
      </View>
            <View>
                <Text>Gastly</Text>
        <Text>Haunter</Text>
                <Text>Gengar</Text>
      </View>
      </View>
  );
};

export default PokemonCard;
