import React from 'react';
import { NativeBaseProvider, Box, useColorModeValue } from 'native-base';
import { useContext, useState } from 'react';
import { Navbar } from './src/NavBar';
import Context from './src/context';
import NoteList from './src/NoteComponents/NoteList'
import {AddNote} from './src/AddNote'

export default function App() {
  let [notes, setNotes] = useState ([
    {
      id: 1,
      title: 'Pizza',
      content: 'hellhellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohelloo',
      date: Date.now().toString()   
    },
    {
      id: 2,
      title: '',
      content: 'hi',
      date: Date.now().toString()
    },    {
      id: 3,
      title: 'Pizza',
      content: 'hello',
      date: Date.now().toString()   
    },
    {
      id: 4,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },    {
      id: 5,
      title: 'Pizza',
      content: 'hello',
      date: Date.now().toString()   
    },
    {
      id: 6,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },
    {
      id: 7,
      title: 'Pizza',
      content: 'hello',
      date: Date.now().toString()   
    },
    {
      id: 8,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },
    {
      id: 9,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },
    {
      id: 81,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },
    {
      id: 83,
      title: 'Pinza',
      content: 'hi',
      date: Date.now().toString()
    },
  ])
  
  return (
    <Context.Provider value={{}}>
      <NativeBaseProvider>
        <Navbar></Navbar>
          <NoteList notes={notes}></NoteList>
          <AddNote></AddNote>
      </NativeBaseProvider>
    </Context.Provider>
  );
}

