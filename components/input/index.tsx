import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = ({ label, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
});
