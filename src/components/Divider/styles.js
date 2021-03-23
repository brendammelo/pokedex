import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const InsiderContainer = styled.View`
  justify-content: space-around;

  & + Text {
    border-left-width: 1;
  }
`;

export const UpperText = styled.Text`
  color: #000;
`;

export const DownText = styled.Text`
  color: #d4d4d4;
`;
