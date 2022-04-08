import React from 'react';
import './Card.css'

type CardProps = {
    src: string;
    title: string;
    description: string;
    price?: string;
};  
  
const Card = (props: CardProps) => (
    <div className='card'>
        <img src={props.src} alt="" />
        <div className="card__info">
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h3>{props.price}</h3>
        </div>
    </div>
);

export default Card;
