import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';
import TextInput from './components/input';

const Login = () => {
  const [title, setTitle] = useState('Welcome');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSignIn = () => {
    setTitle(`Selamat Datang ${name}`);

    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        placeholder="Masukan name anda"
        label="Name"
        onChangeText={setName}
      />
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Masukan email anda"
        label="Email"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Masukan address anda"
        label="Address"
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Masukan phone number anda"
        label="Phone Number"
        onChangeText={setPhone}
      />

      <Button label="Register" onPress={onSignIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
