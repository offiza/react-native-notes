import React, {FC, useContext} from 'react'
import {INote} from '../types'
import { TouchableOpacity } from 'react-native';
import { Box, Button, Center, HStack, Stack, Text } from 'native-base';
import Context from '../context'

interface TodoItemProps{
    note: INote
    index: number
}

const TodoItem: FC<TodoItemProps> = ({note, index}) => { 
    const {} = useContext(Context)

    return(
        <Center
            bg='white'
            borderRadius='20px'
            height='100px'>
            {note.content}
        </Center>
    );
   
}

export default TodoItem;