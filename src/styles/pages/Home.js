import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  padding: 2rem 0;
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
