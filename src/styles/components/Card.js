import styled from 'styled-components';

export const CardItem = styled.li`
  background-color: #fff;
  border-radius: 5px;
  margin: 1rem;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImg = styled.img`
  border-radius: 5px 5px 0 0;
  /* max-height: 500px; */
  width: 100%;
  max-height: 200px;
`;

export const CardName = styled.p`
  padding: 1rem 0;
`;
