import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProfileImg = styled.img`
  margin-right: 2em;

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 1rem auto;
    display: block;
  }
`;

export const FooterLink = styled.p`
  color: blue;
  text-decoration: underline;
`;
