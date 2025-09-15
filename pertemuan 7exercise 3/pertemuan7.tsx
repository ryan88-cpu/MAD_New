import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header / Profile Picture */}
      <View style={styles.header}>
        <Image
          source={require('./assets/ryan.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ryan S</Text>
        <Text style={styles.title}>Developer</Text>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.infoText}>
          📧 Email: s22210182@student.unklab.ac.id
        </Text>
        <Text style={styles.infoText}>📞 Phone: +62 813 2915 8202</Text>
        <Text style={styles.infoText}>📍 Address: Manado, Indonesia</Text>
        <Text style={styles.infoText}>🎂 Date of Birth: 18 February 2004</Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.infoText}>Still experiencing.</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.infoText}>💻 React Native, React.js, Node.js</Text>
        <Text style={styles.infoText}>🎨 UI/UX Design Basics</Text>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.infoText}>🎱 Billiard 9 Ball</Text>
        <Text style={styles.infoText}>🥁 Drum</Text>
        <Text style={styles.infoText}>🏍 Automotives</Text>
        <Text style={styles.infoText}>and more</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
});
