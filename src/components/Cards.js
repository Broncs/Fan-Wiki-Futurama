import Card from './Card';
import { CardsWrapper } from '../styles/components/Cards';

const Cards = ({ data }) => {
  return (
    <CardsWrapper>
      {data.map((char, index) => {
        return <Card key={`${char.Name}__${index}`} {...char} />;
      })}
    </CardsWrapper>
  );
};

export default Cards;
