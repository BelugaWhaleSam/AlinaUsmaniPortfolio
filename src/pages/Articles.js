import React, { useState } from "react";
const { Button, Modal } = require("flowbite-react");
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ title, img, detail, summary, time }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const props = { openModal, setOpenModal };
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-4 relative dark:bg-dark dark:border-light xs:p-4
    mr-8 mt-8 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <div>
        <FramerImage
          src={img}
          alt={title}
          width={500}
          height={500}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-2">
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>

        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
          <Button
            className="mt-2"
            onClick={() => props.setOpenModal("dismissible")}
          >
            Read More
          </Button>
          <Modal
            dismissible
            show={props.openModal === "dismissible"}
            onClose={() => props.setOpenModal(undefined)}
          >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className=" text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {detail}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => props.setOpenModal(undefined)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </span>
      </div>
    </article>
  );
};

const Articles = () => {
  const { data: animalstory, error: animalstoryError } = useSWR(
    "api/animalstory",
    fetcher
  );
  const { data: animalmessage, error: animalmessageError } = useSWR(
    "api/animalmessage",
    fetcher
  );

  if (animalstoryError || animalmessageError) {
    return (
      <div>
        <AnimatedText
          text="Loading"
          className="mt-8 mb-2 lg:!text-4xl sm:mb-8 sm:!text-4xl xs:!text-4xl"
        />
        <div className="flex justify-center items-center items-center p-4">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-emerald-500" />
        </div>
      </div>
    );
  }

  if (!animalstory || !animalmessage) {
    return (
      <div>
        <AnimatedText
          text="Loading"
          className="mt-8 mb-2 lg:!text-4xl sm:mb-8 sm:!text-4xl xs:!text-4xl"
        />
        <div className="flex justify-center items-center items-center p-4">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-emerald-500" />
        </div>
      </div>
    );
  }

  const mappedanimalstory = animalstory.animalstory;
  const mappedanimalmessage = animalmessage.animalmessage;

  return (
    <>
      <Head>
        <title>Alina Usmani Portfolio</title>
        <meta
          name="Alina Usmani Portfolio"
          content=" Alina Usmani portfolio website developed with react"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <h2 className="font-bold text-3xl w-full text-center my-16 mt-8">
            Animal Stories and Articles
          </h2>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {mappedanimalstory.map((animal) => (
              <FeaturedArticle
                key={animal.id}
                title={animal.title}
                summary={animal.summary}
                img={animal.img}
                detail={animal.detail}
                time={animal.time}
              />
            ))}
          </ul>
          <h2 className="font-bold text-3xl w-full text-center my-16 mt-32">
            Message from animal communications
          </h2>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {mappedanimalmessage.map((animal) => (
              <FeaturedArticle
                key={animal.id}
                title={animal.title}
                summary={animal.summary}
                img={animal.img}
                detail={animal.detail}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
