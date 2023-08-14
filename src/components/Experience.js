import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience 
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Business Development Manager"
            company="DroneAcharya Aerial Innovations Limited [BSE : DRONACHRYA]"
            companyLink="https://www.linkedin.com/company/droneacharya/"
            time="Dec 2022 - Present · 9 months"
            address="Pune, Maharashtra, India"
            work="DAaS | SAaS | Training | ProductsDAaS | SAaS | Training | Products
            Skills: Project Management · Business-to-Business (B2B) · B2G · B2C · Client Relations · Business Development"
          />

          <Details
            position="DGCA Approved RPTO - Maintenance Manager"
            company="Jatayu Unmanned Systems"
            companyLink="https://www.linkedin.com/company/jus-tech/"
            time="Sept 2022 - Dec 2022 · 4 months"
            address="Mumbai, Maharashtra, India"
            work="Jatayu Drone Academy (RPTO)Jatayu Drone Academy (RPTO)
            Skills: Operational Planning · Team Management"
          />

          <Details
            position="Project Lead"
            company="Jatayu Unmanned Systems"
            companyLink="https://www.linkedin.com/company/jus-tech/"
            time="Jan 2022 - Dec 2022 · 1 yr"
            address="Mumbai, Maharashtra, India"
            work="UAS | Anti Drones| RPTO |TC | DAaS |Bids and Proposals| Business DevelopmentUAS | Anti Drones| RPTO |TC | DAaS |Bids and Proposals| Business Development
            Skills: Project Management · Product Development · Bid Management · Technology Transfer · Project Coordination · Business Development"
          />

          <Details
            position="UAV Design Engineer"
            company="Jatayu Unmanned Systems"
            companyLink="https://www.linkedin.com/company/jus-tech/"
            time="Oct 2018 - Jan 2022 · 3 yrs 4 months"
            address="Mumbai, Maharashtra, India"
            work="UCAV | Attack Drone | Drone Swarm | Logistic Drones | Heavy lift dronesUCAV | Attack Drone | Drone Swarm | Logistic Drones | Heavy lift drones
            Skills: Rapid Prototyping · Research and Development (R&D) · Drone Piloting"
          />

          <Details
            position="Aircraft Engineer"
            company="Hindustan Aeronautics Limited"
            companyLink="https://www.linkedin.com/company/hindustanaeronauticslimited/"
            time="Jun 2017 · 1 month"
            address="Lucknow, Uttar Pradesh, India"
            work="Knowledge about the manufacturing of various components and accessories of engine system, hydraulic system and about their functions in Aircraft and NDT techniques."
          />

          <Details
            position="Aircraft Maintenance Engineer"
            company="Air India Limited"
            companyLink="https://www.linkedin.com/company/airindia/"
            time="Jun 2016 · 1 month"
            address="Chennai Airport"
            work="Internship based on Maintenance and Overhaul.
              Knowledge of Airbus family, Maintenance and inspection techniques, engine systems, instruments systems and hydraulic and pneumatic systems."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
