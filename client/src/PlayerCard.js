import React from 'react';

const PlayerCard = props => {  
    // console.log(`props inside Player Card -->`, props)
    return (
    <div>
        <p>Name: {props.player.name}</p>
        <p>Player ID: {props.player.id}</p>
        <p>Country: {props.player.country}</p>
        <p>Searches: {props.player.searches}</p>

    </div>
  )
}  


export default PlayerCard;