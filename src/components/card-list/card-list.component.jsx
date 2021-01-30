import React from 'react';
import  './card-list.styles.css';
import {Card} from '../card/card.component'

export const ClassList=(props)=>{
    return <div className="card-list">
    {props.monsters.map( (a) =>
       <Card key={a.id} monsters={a}/>
    )}
    </div>
}