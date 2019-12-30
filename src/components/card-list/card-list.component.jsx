import React from "react";

import {Card} from "../card/card.component";
import './card-list.styles.css'

export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                // passes the monster variable to the Card component
                <Card key={monster.id} monster={monster}/>
            ))
        }
    </div>
)