import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import { data } from '../data';

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>AV0CAD0</title>
        <meta
          name="description"
          content="A melhor agência de marketing digital do mercado"
        />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data; // await axios()...
  return {
    props: { services },
  };
};

// 37:30 ver se carrega os servicos
