import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sadsvg from '../assets/sad.svg';
import { Button } from 'native-base';

const Lost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Sadsvg
        width="200"
        height="200"
        fill="none"
      >
      </Sadsvg>
      <Text style={styles.text}>Oops! You Lost</Text>
      <Button onPress={()=>{navigation.navigate('Home')}}>Go back</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Lost;
