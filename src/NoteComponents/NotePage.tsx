import React, {FC, useContext, useEffect, useState} from 'react';
import {INote} from '../types';
import { Box, TextArea, Stack, Text } from 'native-base';
import Context from '../context';
import {RootStackParamList} from '../RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { border } from 'styled-system';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type ProfileScreenRouteProp = Props['route'];



const NotePage = ({route}: Props) => {
    const params = route.params;
        const [content, setContent] = useState("")

        useEffect(() => {
           setContent(params.note.content);            
        }, [params.note.content]);

        const setContentHandler = (e: any) => {
            setContent(e.target.value)
        }

    return(
        <Box bg='black'
        minWidth='100%'
        minHeight='100%'>
        <Stack 
            space={4} 
            w="100%" 
            h="100%" 
            _text={{
                top: '0'
            }}>
            <TextArea
            borderColor='black'
            h='95%'
            color='white'
            value={content}
            onChange={setContentHandler}
            />
        </Stack>
        
            <Text>{params.note.content}</Text> 
        </Box>
    );
}

export default NotePage;