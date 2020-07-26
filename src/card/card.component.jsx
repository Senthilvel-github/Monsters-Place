import React from 'react'
import './card.styles.css'
export const Card = (props) => (
    <div className = 'card-container' >
        <img alt = 'monstor' src = {`https://robohash.org/${props.eachMember.id}?set=set2&size=180x180`} />
        <h1>{props.eachMember.name}</h1>
        <p>{props.eachMember.Relationship}</p>
    </div>
)