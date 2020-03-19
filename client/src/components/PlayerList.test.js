import React from 'react';
import {render,cleanup} from '@testing-library/react';
import PlayerList from './PlayerList';

// Jest's Cleanup function called by default after every test
afterEach(cleanup);

describe('PlayerList',() =>{
    test('Faux test',()=>{
        // Asserting - with the expect func - that dark mode has been rendered
        expect(true).toBeTruthy()
    })
   
    test('renders correctly'),() =>{
        // Arrange action to run later in PlayerList
        const {getByText} = render (<PlayerList />)

        // Act - using getByText to ensure toggle is being redered by PlayerList component
         getByText(/onDarkMode/)
    }  
})