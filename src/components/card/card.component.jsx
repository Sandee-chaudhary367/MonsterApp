import React from 'react';
import './card.styles.css';

export const Card=(props)=>{
    return <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
     <h1>{props.monsters.name}</h1>
     </div>
}