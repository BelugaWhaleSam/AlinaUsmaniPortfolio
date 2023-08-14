import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Alina Usmani</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="mailto:alen96me@gmail.com"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Alina Usmani
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/alina-u-ab0b01142/"
          target={"_blank"}
          className="underline
            underline-offset-2
            "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
