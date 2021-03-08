import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Container } from '../styles/components/Container';
import { Form, Title } from '../styles/pages/Home';

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
  const [results, setResults] = useState(data);
  const [pagination, setPagination] = useState(1);

  const fetchByName = async (endpoint) => {
    const res = await (await fetch(endpoint)).json();
    setResults(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === 'query');

    const value = fieldQuery.value || '';
    const endpoint = `https://futuramaapi.herokuapp.com/api/v2/characters?search=${value}`;
    fetchByName(endpoint);
  };

  useEffect(() => {
    if (pagination === 1) return;
    const fetchMore = async () => {
      const data = await fetch(
        `http://futuramaapi.herokuapp.com/api/v2/characters/?page=${pagination}`
      );
      const res = await data.json();
      setResults(res);
    };
    fetchMore();
  }, [pagination]);

  const handleLoadMore = () => {
    setPagination(pagination + 1);
  };

  return (
    <div>
      <Head>
        <title>Fan wiki</title>
      </Head>

      <Container>
        <Title>Futurama Wiki</Title>

        <Form onSubmit={handleSubmit}>
          <input type="search" name="query" />
          <button>Search</button>
        </Form>

        <Cards data={results} />
        <button onClick={handleLoadMore}>Load more</button>
      </Container>
    </div>
  );
}
