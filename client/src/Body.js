import React from 'react';
import PlayerCard from "./PlayerCard";
import { useDarkMode } from './Hooks/useDarkMode';
import "./styles.css";
import styled from 'styled-components';

const DarkModeButton = styled.button`
    padding: 10px;
    border-radius:5px;
    background-color: white;
    margin-top:5%;
    margin-bottom:5%;
`




const Body = props => {  
    // console.log(`props inside Body -->`, props)
    
    //Set state
    const [darkMode, setDarkMode] = useDarkMode('isDark');

    //Toggle event handler
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }


    return (
      <>
    {/* Pass in event handler */}
    <DarkModeButton data-testid='button' onClick={toggleMode}>Dark Mode</DarkModeButton>   

     <div>
         {/* Conditional Rendering ---LOOK THIS UP */} 
         {props.getData && props.getData.map((player) => {
            //  console.log(player);
             return (
                <PlayerCard player={player} key={player.id}/>
             )
         })}      
     </div>

     </>   
    )
}  


export default Body;