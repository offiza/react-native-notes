import React from 'react';
import { Box, Button, Text } from 'native-base';

export const AddNote = () =>{
    return (    
        <Button       
            bg='orange.400'
            p={4}
            height='60px'
            width= '60px'
            borderRadius='50px'
            position='absolute'
            bottom='23px'
            right='23px'
            _text={{
                color: 'white',
                fontSize: '2xl'
            }}>
            &#43;
        </Button>
    );   
}
