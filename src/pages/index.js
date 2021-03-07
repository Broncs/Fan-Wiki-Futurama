import Head from 'next/head';
import Cards from '../components/Cards';
import { Container } from '../styles/components/Container';

//futuramaapi.herokuapp.com/api/v2/characters/?page=21
const defaultEndPoint = `http://futuramaapi.herokuapp.com/api/v2/characters`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data = [] }) {
  return (
    <div>
      <Head>
        <title>Fan wiki</title>
      </Head>

      <Container>
        <h1>Futurama Wiki</h1>
        <Cards data={data} />
      </Container>
    </div>
  );
}
