import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Container } from '../styles/components/Container';
import { Form, LoadMoreButton, Logo, Title } from '../styles/pages/Home';

//futuramaapi.herokuapp.com/api/v2/characters/?page=21
const defaultEndPoint = `https://futuramaapi.herokuapp.com/api/v2/characters`;

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
  const [pagination, setPagination] = useState(19);

  const fetchByName = async (endpoint) => {
    const res = await (await fetch(endpoint)).json();
    setResults(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === 'query');
    if (fieldQuery.value === '') {
      return;
    }

    const value = fieldQuery.value || '';
    const endpoint = `https://futuramaapi.herokuapp.com/api/v2/characters?search=${value}`;
    fetchByName(endpoint);
  };

  useEffect(() => {
    if (pagination === 1) return;
    const fetchMore = async () => {
      const data = await fetch(
        `https://futuramaapi.herokuapp.com/api/v2/characters/?page=${pagination}`
      );
      const res = await data.json();
      setResults(res);
    };
    fetchMore();
  }, [pagination]);

  const handleLoadMore = () => {
    console.log(pagination);
    if (pagination >= 20) {
      setPagination(1);
    } else {
      setPagination(pagination + 1);
    }
  };

  return (
    <div>
      <Head>
        <title>Fan wiki</title>
      </Head>

      <Container>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/2000px-Futurama_1999_logo.svg.png"
            alt="futurama"
          />
        </Logo>

        <Form onSubmit={handleSubmit}>
          <input type="search" name="query" />
          <button>Search</button>
        </Form>

        <Cards data={results} />
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      </Container>
    </div>
  );
}
