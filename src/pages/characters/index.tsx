import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Characters } from '../../components/characters/Characters';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { fetchCharacters } from '../../lib/swapi';
import { IPeopleResponse } from '../../types';

export type PageProps = {
  peopleResponse: IPeopleResponse;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { peopleResponse } = data;
  console.log(peopleResponse);
  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1>Star Wars characters</h1>
      <ul>
        {peopleResponse.people.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  // TODO sækja karaktera
  const peopleResponse = await fetchCharacters();

  return {
    props: {
      peopleResponse: peopleResponse?.allPeople??null,
    },
  };
};
