import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useContext, useState } from 'react';
import { Navbar } from './NavBar';
import Context from './context';
import NoteList from './NoteComponents/NoteList'
import {AddNote} from './AddNote'


export default function HomePage() {
    const { notes } = useContext(Context)
    
    return (
        <NativeBaseProvider>
            <NoteList notes={notes}></NoteList>
            <AddNote></AddNote>
        </NativeBaseProvider>
    );
}

