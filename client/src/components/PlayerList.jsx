import React from 'react';
import Player from './Player'
import darkMode from './darkMode'


const PlayerList = (props) =>{
    const [onDarkMode, setOnDarkMode] = darkMode();

    return(
       <div>
           <h1>Player List</h1>  
           <div className="dark-mode__toggle">
                <div onClick={setOnDarkMode} className={onDarkMode ? "toggle toggled" : "toggle"}></div>
            </div>         
            <div className ="playersList">
               {props.players.map(player =>(
                <Player className ="player" key = {player.id}  player ={player} /> 
               ))}
           </div>
       </div>
    )
}

export default PlayerList;