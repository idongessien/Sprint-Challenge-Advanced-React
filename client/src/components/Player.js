import React from 'react';
import styled from 'styled-components';

const Playa = styled.div`
    margin: 2%;
    width: 20%;
    background: rgba(25, 120, 200, 1);
    border-radius: 10px;
    text-align: center;
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