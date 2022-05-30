import Head from 'next/head';
import Intro from '../components/Intro';

export default function Home() {
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
    </div>
  );
}
