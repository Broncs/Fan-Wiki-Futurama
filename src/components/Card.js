import React from 'react';
import { CardItem } from '../styles/components/Card';
import { CardImg } from '../styles/components/CardImg';

const Card = ({ PicUrl, Name }) => {
  console.log();
  return (
    <CardItem>
      <CardImg src={PicUrl} alt={Name} />
      <p>{Name}</p>
    </CardItem>
  );
};

export default Card;
