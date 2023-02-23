import { About } from '@/Components/About';
import { Banner } from '@/Components/Banner';
import { Bonus } from '@/Components/Bonus';
import { CourseSummary } from '@/Components/CourseSummary';
import { Creator } from '@/Components/Creator';
import { Header } from '@/Components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Criando no Figma</title>
      </Head>

      <Header />
      <Banner />
      <About />
      <CourseSummary />
      <Bonus />
      <Creator />
    </>
  )
}
