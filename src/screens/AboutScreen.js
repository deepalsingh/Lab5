import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; 

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString(); 

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About This App</Text>
        <Text>Name: My To-Do List App</Text>
        <Text>Developer: Deepal Singh</Text> 
        <Text>Date: {currentDate}</Text> 

        
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')} 
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
});

export default AboutScreen;
