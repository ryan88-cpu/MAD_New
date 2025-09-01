import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <Text style={styles.title}>Basic React Native</Text>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontWeight: '600',
  },
});
