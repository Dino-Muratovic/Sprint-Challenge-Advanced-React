import React from 'react';
import styled from 'styled-components';





//BASIC STYLING
const PlayerCardContainer = styled.div`
    background-color:rgb(255,128,113);
    width:50%;
    margin:0 auto;
    padding:10px;
    margin-top:10px; 
    border-radius:10px;
    font-family: 'Comic Neue', cursive;
    font-size:1.5rem;
`

const PlayerCard = props => {  
    // console.log(`props inside Player Card -->`, props)
    
    return (
    <>  
    <PlayerCardContainer>
        <p>Name: {props.player.name}</p>
        <p>Player ID: {props.player.id}</p>
        <p>Country: {props.player.country}</p>
        <p>Searches: {props.player.searches}</p>
    </PlayerCardContainer>

    </>
  )
}  


export default PlayerCard;