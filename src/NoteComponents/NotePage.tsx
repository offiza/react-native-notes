import React, {FC, useContext} from 'react';
import {INote} from '../types';
import { Dimensions } from 'react-native';
import { Box, Button, Center, HStack, Stack, Text } from 'native-base';
import Context from '../context';
import { Route, useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = Props['navigation'];

type ProfileScreenRouteProp = Props['route'];

interface NotePageProps{
    note: INote
}

const NotePage = ({navigation, route}: Props) => {
    const params = route.params;

    return(
        <Box>
            {console.log(params.note)}
            <Text>{params.note.content}</Text> 
        </Box>
    );
   
}

export default NotePage;