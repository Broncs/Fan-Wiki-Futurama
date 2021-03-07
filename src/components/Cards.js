import Card from './Card';
import { CardsWrapper } from '../styles/components/Cards';

const Cards = ({ data }) => {
  return (
    <CardsWrapper>
      {data.map((char) => {
        return <Card key={char.Name} {...char} />;
      })}
    </CardsWrapper>
  );
};

export default Cards;
