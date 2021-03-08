import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  padding: 2rem 0;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 1rem 0;
  }
`;

export const Logo = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  input {
    margin-right: 0.5rem;
    padding: 0.3rem 1rem;
  }

  button {
    padding: 0.3rem 1rem;
  }

  @media (max-width: 600px) {
    input {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    input,
    button {
      width: 100%;
    }
  }
`;

export const LoadMoreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: orange;
  margin: 3rem 0;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: orangered;
  }
`;
