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
import { MenuMobile } from '@/Components/MenuMobile';

export default function Home() {
  const [scrollActive, setScrollAtvite] = useState(false);
  const [isVisibleMenu, setisVisibleMenu] = useState(false);

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

  useEffect(() => {
    document.body.style.overflowY = isVisibleMenu ? 'hidden' : 'auto';
  }, [isVisibleMenu])

  return (
    <>
      <Head>
        <title>Rôbo Milionário</title>
      </Head>


      <MenuMobile isVisibleMenu={isVisibleMenu} setisVisibleMenu={setisVisibleMenu} />
      <Header
        activeColorScroll={scrollActive}
        setisVisibleMenu={setisVisibleMenu}
      />

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