import React from 'react';
import PlayerCard from "./PlayerCard";

const Body = props => {  
    console.log(`props inside Body -->`, props.getData)
    return (
     <>   
     <div>
     {props.getData.map((person) => {
            console.log(`this is person`, person)
            return (
                <PlayerCard/> 
            )
          })}

          {/* <PlayerCard/> */}
          </div>
    
    </>

  )
}  


export default Body;