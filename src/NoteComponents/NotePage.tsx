import React, {FC, useContext} from 'react';
import {INote} from '../types';
import { Box, Button, Center, HStack, Stack, Text } from 'native-base';
import Context from '../context';
import {RootStackParamList} from '../RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type ProfileScreenRouteProp = Props['route'];

interface NotePageProps{
    note: INote
}

const NotePage = ({route}: Props) => {
    const params = route.params;

    return(
        <Box bg='black'
        minWidth='100%'
        minHeight='100%'>
            {console.log(params.note)}
            <Text>{params.note.content}</Text> 
        </Box>
    );
   
}

export default NotePage;