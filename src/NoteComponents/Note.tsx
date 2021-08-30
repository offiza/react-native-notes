import React, {FC, useContext} from 'react'
import {INote} from '../types'
import { TouchableOpacity, Dimensions } from 'react-native';
import { Box, Button, Center, HStack, Stack, Text } from 'native-base';
import Context from '../context'
import time from '../Time'
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface NoteItemProps{
    note: INote
    index: number
}

const NoteItem: FC<NoteItemProps> = ({note, index}) => { 
    const navigation = useNavigation<mainScreenProp>();

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
        if(note.content.length >= 43)
            return <Text
                color='white'
                marginTop='10px'>
                {note.content.substr(0,43)+'...'}
            </Text> 
        else return <Text
            color='white'
            marginTop='10px'>
            {note.content}
        </Text> 
    }

    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
                navigation.navigate('NotePage', {
                  itemId: note.id,
                  note: note
                });}}>
            <Box
                bg='dark.50'
                borderRadius='30px'
                height='150px'
                width={(Dimensions.get('window').width/100*45)}
                paddingX='20px'
                paddingY='20px'
                marginY='4px'>
                <Title></Title>
                <Text 
                    fontSize='sm'>
                    {time(note.date)} 
                </Text>
                <Content></Content>
            </Box>
        </TouchableOpacity>
    );
   
}

export default NoteItem;