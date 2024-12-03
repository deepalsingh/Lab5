import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; 
import ToDoForm from '../components/ToDoForm'; 
import ToDoList from '../components/ToDoList'; 

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([ 
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  
  const addTask = (taskText) => {
    setTasks((prevTasks) => [...prevTasks, taskText]); 
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My To-Do List</Text>
       
        <ToDoForm addTask={addTask} />
        
        <ToDoList tasks={tasks} />
        
        
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')} 
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

export default HomeScreen;
