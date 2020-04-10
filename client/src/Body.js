import React from 'react';
import PlayerCard from "./PlayerCard";

const Body = props => {  
    // console.log(`props inside Body -->`, props)
    return (
      
     <div>
         {/* Conditional Rendering ---LOOK THIS UP */} 
         {props.getData && props.getData.map((player) => {
             console.log(player);
             return (
                <PlayerCard player={player} key={player.id}/>
             )
         })}      
     </div>
    
    

  )
}  


export default Body;