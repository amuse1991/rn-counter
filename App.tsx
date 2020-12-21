import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from "./src/Components/Screens/Counter"
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE
`

export default function App() {
  return (
    <Container>
      <Counter title="this is counter app" initValue={5}/>
      <StatusBar style="auto" />
    </Container>
  );
}
