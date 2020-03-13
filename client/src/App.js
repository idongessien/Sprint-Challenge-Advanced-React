import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';
import styled from 'styled-components';

export default class App extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        player: []
  }
}

componentDidMount(){ 
  this.getPlayers()  
}

getPlayers =()=>{
  axios
  .get(`http://localhost:5000/api/players`)
  .then(response =>{
    console.log("Axios call!", response)
      this.setState({
      player: response.data
    })
  })
  .catch(err =>{
    console.log("Error Alert!", err)
  })
}

render(){
  console.log("State says hello!", this.state)
    return(
      <div>       
        <PlayerList players={this.state.player}/>        
      </div>      
    )
  };
}