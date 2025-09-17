import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Input from './components/input';
import Button from './components/button';
const SignIn = () => {
  const onSignIn = () => {
    console.log('Button di Klik');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign In" onPress={onSignIn} />
      <Button label="Create New Account" color="grey" />
      <Button label="Sign in with Google" color="red" />
      <Button label="Sign in with Facebook" color="blue" />
      <Button label="Sign in with Apple" color="black" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
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
  button: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
