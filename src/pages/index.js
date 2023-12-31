import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/Alina.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alina Usmani Portfolio</title>
        <meta
          name="description"
          content="Alina Portfolio"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full p-12 lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Odasys"
                className="w-full h-auto pr-5 pb-5 rounded-md lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="A drone maven's precision, an animal lover's heart"
                className="!text-4xl !text-left 
                xl:!text-5xl lg:!text-left lg:!text=6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-2 text-base lg:!text-left font-medium md:text-sm sm:text-xs">
                Accomplished Aerospace Engineer, UAV Test Pilot, and
                compassionate advocate, shaping skies and souls. 4+ years
                designing, navigating regulations, and fostering innovation,
                complemented by animal activism and psychic insight. Visionary
                in safety, bids, and drone trends, shaping aerial possibilities.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'} //add reusme link here
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:alen96me@gmail.com"
                  target={'_blank'} //add email link here
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden"></div>
      </main>
    </>
  );
}
