import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Container } from '../styles/components/Container';
import { Form, LoadMoreButton, Logo, Title } from '../styles/pages/Home';
import { SyncLoader } from 'react-spinners/';

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
  const [pagination, setPagination] = useState(1);
  const [status, setStatus] = useState('resolved');

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
    setStatus('pending');

    const fetchMore = async () => {
      try {
        const data = await fetch(
          `https://futuramaapi.herokuapp.com/api/v2/characters/?page=${pagination}`
        );
        const res = await data.json();
        setResults(res);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    };
    fetchMore();
  }, [pagination]);

  const handleLoadMore = () => {
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

        {status === 'pending' && (
          <div style={{ margin: '2rem' }}>
            <SyncLoader loading size={20} />
          </div>
        )}
        {status === 'resolved' && <Cards data={results} />}

        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      </Container>
    </div>
  );
}
