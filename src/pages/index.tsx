import Head from 'next/head';
import { useEffect, useState } from 'react';
import { About } from '@/Components/About';
import { Banner } from '@/Components/Banner';
import { Bonus } from '@/Components/Bonus';
import { CourseSummary } from '@/Components/CourseSummary';
import { Creator } from '@/Components/Creator';
import { Header } from '@/Components/Header';
import { BuyCourse } from '@/Components/BuyCourse';
import { Footer } from '@/Components/Footer';

export default function Home() {
  const [scrollActive, setScrollAtvite] = useState(false);

  useEffect(() => {
    function scrollPosition() {
      if (window.scrollY > 20) {
        setScrollAtvite(true)
      } else (
        setScrollAtvite(false)
      )
    }

    window.addEventListener('scroll', scrollPosition)
  }, [])

  return (
    <>
      <Head>

        <title>Rôbo Milionário</title>
      </Head>

      <Header activeColorScroll={scrollActive} />

      <main>
        <Banner />
        <About />
        <CourseSummary />
        <Bonus />
        <Creator />
        <BuyCourse />
      </main>

      <Footer />
    </>
  )
}
