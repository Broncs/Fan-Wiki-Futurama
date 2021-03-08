import styled from 'styled-components';

export const CardsWrapper = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  gap: 1rem;
  padding: 1rem;
`;
