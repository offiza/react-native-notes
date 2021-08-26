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

    const Title = () => {
        if(note.title.trim() !== ''){  
            return <Text
                fontSize='lg'
                color='white'>
                {note.title}
            </Text>
        }
        else {
            return (null)
        }
    }
    const Content = () => {
        if(note.content.length >= 63)
            return <Text
                color='white'
                marginTop='10px'>
                {note.content.substr(0,63)+'...'}
            </Text> 
        else return <Text
            color='white'
            marginTop='10px'>
            {note.content}
        </Text> 
    }

    return(
        <Box
            bg='dark.50'
            borderRadius='30px'
            height='150px'
            width='250px'
            paddingX='20px'
            paddingY='20px'
            marginY='4px'>
                <Title></Title>
                <Text 
                    fontSize='sm'>
                    {note.date}
                </Text>
                <Content></Content>
        </Box>
    );
   
}

export default TodoItem;