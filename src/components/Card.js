import React from 'react';
import { CardItem, CardImg, CardName } from '../styles/components/Card';

const Card = ({ PicUrl, Name }) => {
  return (
    <CardItem>
      <CardImg src={PicUrl} alt={Name} />
      <CardName>{Name}</CardName>
    </CardItem>
  );
};

export default Card;
