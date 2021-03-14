import Head from 'next/head';
import { Container } from '../../../styles/components/Container';
import { Profile, ProfileImg } from '../../../styles/pages/character';
import { Title } from '../../../styles/pages/Home';
import Link from 'next/link';

//futuramaapi.herokuapp.com/api/v2/characters/?page=21
const defaultEndPoint = `https://futuramaapi.herokuapp.com/api/v2/characters?search=`;

export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await fetch(`${defaultEndPoint}${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Character({ data = [] }) {
  const {
    Species,
    Name,
    Age,
    Planet,
    Profession,
    Status,
    PicUrl,
    Relatives,
    FirstAppearance,
  } = data[0];
  console.log(data);

  return (
    <div>
      <Head>
        <title>{Name}</title>
      </Head>
      {data.length == 0 ? (
        <h1>
          Loading
          {console.log('loading')}
        </h1>
      ) : (
        <Container>
          <Title>{Name}</Title>
          <Profile>
            <div>
              <ProfileImg src={PicUrl} alt={Name} />
            </div>
            <div>
              <h2>Character Details</h2>
              <ul>
                <li>
                  <strong>Name:</strong> {Name}
                </li>
                <li>
                  <strong>Species:</strong> {Species}
                </li>
                <li>
                  <strong>Planet:</strong> {Planet}
                </li>
                <li>
                  <strong>Age:</strong> {Age}
                </li>
                <li>
                  <strong>Profession:</strong> {Profession}
                </li>
                <li>
                  <strong>FirstAppearance:</strong> {FirstAppearance}
                </li>
                <li>
                  <strong>Status:</strong> {Status}
                </li>
                <li>
                  <strong>Relatives:</strong> {Relatives}
                </li>
              </ul>
            </div>
          </Profile>
          <p>
            <Link href="/">
              <a>Back to All characters</a>
            </Link>
          </p>
        </Container>
      )}
    </div>
  );
}
