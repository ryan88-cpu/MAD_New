import React from 'react';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';

export default function App() {
  const base64Image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>1. Static Resource</Text>
      <Image
        source={require('./assets/unklablogo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>2. Network Image</Text>
      <Image
        source={{
          uri: 'https://www.unklab.ac.id/wp-content/uploads/2022/12/Edgar-Willem-Melko-Tauran-M.Div-D.Miss_-225x300.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>3. Base64 Image</Text>
      <Image
        source={{ uri: base64Image }}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});
