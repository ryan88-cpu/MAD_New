import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  container: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,
    margin: 15,
  },
  redBox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
  },
  greenBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 10,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 10,
  },
});
