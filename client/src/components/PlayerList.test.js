import React from 'react';
import {render,cleanup} from '@testing-library/react';
import PlayerList from './PlayerList';

afterEach(cleanup);

describe('PlayerList',() =>{
    
    test('Faux test',()=>{
        expect(true).toBeTruthy()
    })
   
    test('renders correctly'),() =>{
        const {getByText} = render (<PlayerList />)
         getByText(/darkMode/)
    }  
})