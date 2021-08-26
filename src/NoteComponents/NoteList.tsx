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
        <ScrollView
            _contentContainerStyle={{
                px: "44px",
                w: "100%",
                bg: 'black',
            }} 
            height={400}>
            <VStack>
                {notes.map((note, index) => (
                    <Note key={note.id} note={note} index={index}></Note>
                    )
                ) }
            </VStack>
        </ScrollView>
    );
}

export default TodoList