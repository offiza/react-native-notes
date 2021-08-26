import React from 'react';
import { Box, useColorModeValue, Text } from 'native-base';

export const Navbar= () =>{
    return (    
        <Box       
            bg='black'
            p={4}
            height='9%'>
            <Text
                color='orange.50'
                fontSize='xl'
                fontFamily='Roboto'
                marginTop='15px'>
                All Notes
            </Text>
        </Box>
    );   
}
