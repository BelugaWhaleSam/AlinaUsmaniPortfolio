import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const FramerImage = motion(Image);

const FeaturedProject = ({ title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 mt-8"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          width={600}
          height={200}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Link
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    ml-8 mr-8 mt-8"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={500}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit Meet Link
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const { data: droneData, error: droneError } = useSWR('api/drone', fetcher);
  const { data: meetData, error: meetError } = useSWR('api/droneMeet', fetcher);

  if (droneError || meetError) {
    return <div>Error loading data</div>;
  }

  if (!droneData || !meetData) {
    return <div>Loading...</div>;
  }

  const mappedDrones = droneData.drone;
  const mappedDronesMeet = meetData.droneMeet;
  return (
    <>
      <Head>
        <title>Alina Usmai Portfolio</title>
        <meta
          name="description"
          content="Alina Usmai Portfolio. Get to know me!"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Get To Know Me!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              {mappedDrones.map((drone) => (
              <FeaturedProject
                key={drone.id}
                title={drone.title}
                summary={drone.info}
                img={drone.image}
                link={drone.link}
              />))}
            </div>
            <div className="col-span-12 sm:col-span-12 flex flex-row sm:flex-wrap ">
              {mappedDronesMeet.map((droneMeet) => (
                <Project
                  key={droneMeet.id}
                  title={droneMeet.title}
                  img={droneMeet.image}
                  link={droneMeet.link}
                />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
