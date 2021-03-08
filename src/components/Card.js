import React from 'react';
import {
  CardItem,
  CardImg,
  CardName,
  CardLink,
} from '../styles/components/Card';
import Link from 'next/link';

const Card = ({ PicUrl, Name }) => {
  return (
    <CardItem>
      <Link href="/character/[id]" as={`/character/${Name}`}>
        <CardLink>
          <CardImg src={PicUrl} alt={Name} />
          <CardName>{Name}</CardName>
        </CardLink>
      </Link>
    </CardItem>
  );
};

export default Card;
