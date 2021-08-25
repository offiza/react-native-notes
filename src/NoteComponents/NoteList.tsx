import React, {FC} from 'react'
import { INote } from '../types';
import Note from './Note'
import { Box, VStack, Text, Center, Container, ScrollView } from 'native-base';
import Context from '../context';

interface TodoListProps{
    notes: INote[],
}

const TodoList: FC<TodoListProps> = ({notes}) => {
    return(
        // <ScrollView
        // _contentContainerStyle={{
        //     h: "100%",
        //     w: "100%",
        //     maxH: '95%',
        //   }} 
        //   maxHeight='100%'>
        //         <VStack 
        //             space={2} 
        //             alignItems="center"
        //             bg='dark.500'>
        //             {notes.map((note, index) => <Note key={note.id} note={note} index={index}></Note>)}
        //         </VStack>  
        // </ScrollView>
    
        <ScrollView
            _contentContainerStyle={{
                px: "44px",
                w: "100%",
                bg: 'dark.800',
            }} 
            height={400}>
            <VStack>
                {notes.map((note, index) => <Note key={note.id} note={note} index={index}></Note>)}
            </VStack>
        </ScrollView>
    );
}

export default TodoList