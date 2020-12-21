import React from 'react';
import Styled from "styled-components/native";

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  iconName: 'plus' | 'minus'
  onPress?: ()=>void;
}

const Button = ({iconName, onPress}:Props) => {
  return (
    <Container>
      <Icon source={iconName === 'plus' ? require('../../../assets/add.png') : require('../../../assets/remove.png')}/>
    </Container>
  )
}

export default Button;