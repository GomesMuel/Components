import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CarProvider } from './components/CarContext'

import CarCountComponent from './components/CarCountComponent';
import CarListComponents from './components/CarCountComponent';
import CarInputComponent from './components/CarCountComponent';


export default function App() {
  return (
    <CarProvider>
      <View style={styles.container}>
        <CarCountComponent />
        <CarInputComponent />
        <CarListComponents />
        <StatusBar style='auto' />
      </View>
    </CarProvider> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});