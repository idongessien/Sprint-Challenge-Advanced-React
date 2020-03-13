import React from 'react';
import styled from 'styled-components';

const Playa = styled.div`
    margin: 1%;
    width: 18%;
    background: lightskyblue;
    border-radius: 10px;
    text-align: center;
    font-weight: 300;
`;

const Player =(props) =>{
    return(
        <Playa>
           <h2>Name - {props.player.name}</h2>
           <h3>Country - {props.player.country}</h3>
           <h3>Search Interest - {props.player.searches}</h3>
        </Playa>
    );
}

export default Player;