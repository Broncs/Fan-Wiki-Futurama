import styled from 'styled-components';

export const CardItem = styled.li`
  background-color: #fff;
  border-radius: 5px;
  margin: 1rem;
  max-width: 300px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    border: 1px solid black;
  }
`;

export const CardLink = styled.a`
  color: #333;
  text-decoration: none;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
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
