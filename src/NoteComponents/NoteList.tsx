import React, {FC} from 'react'
import { INote } from '../types';
import Note from './Note'
import { Box, VStack, Text, Center, Container, ScrollView, HStack } from 'native-base';
import Context from '../context';

interface NoteListProps{
    notes: INote[],
}

interface ListProps{
    value: number,
}

const NoteList: FC<NoteListProps> = ({notes}) => {
    
    const List: FC<ListProps> = ({value}) => {
        let newNotes: INote[] = []

        notes.map((note, index) => {
            if(index % 2 === value){
                newNotes.push(note)
            }
        }
        )
        return <VStack>
            {newNotes.map((note, index) => (
                    <Note key={note.id} note={note} index={index}></Note>
                    )
                )}
        </VStack>
    }

    return(
        <ScrollView
            _contentContainerStyle={{
                alignItems: 'center',
                w: "100%",
                bg: 'black',
            }} 
            height={400}>
            <HStack space={4} >
                <List value={0}></List>
                <List value={1}></List>
            </HStack>
        </ScrollView>
    );
}

export default NoteList