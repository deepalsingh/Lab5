import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 My To-Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Footer;
