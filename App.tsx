import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useContext, useState } from 'react';
import { Navbar } from './src/NavBar';
import Context from './src/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import NotePage from './src/NoteComponents/NotePage'
import { color } from 'styled-system';

export default function App() {
  let [notes, setNotes] = useState ([
    {
      id: 1,
      title: 'Pizza',
      content: 'hellhellohelloh',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 2,
      title: '',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },    
    {
      id: 3,
      title: 'Pizza',
      content: 'hello',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 4,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },    {
      id: 5,
      title: 'Pizza',
      content: 'hello',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 6,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 7,
      title: 'Pizza',
      content: 'hello',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 8,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 9,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 81,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },
    {
      id: 83,
      title: 'Pinza',
      content: 'hi',
      date: new Date(Date.now()).toString()   
    },
  ])

  const Stack = createNativeStackNavigator();

  return (
    <Context.Provider value={{notes}}>
      <NativeBaseProvider>
        {/* <Navbar></Navbar> */}
        <NavigationContainer >
          <Stack.Navigator 
            initialRouteName="Home">
            <Stack.Screen
             name="Home" 
             component={HomePage}
             options={{
              headerStyle: {
                backgroundColor: 'black'
              },
              headerTintColor: '#fff',
             }}/>
            <Stack.Screen name="NotePage" component={NotePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Context.Provider>
  );
}