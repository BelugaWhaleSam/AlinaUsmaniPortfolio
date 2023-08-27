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
        Designed
          by&nbsp;
          <Link
            href="https://devdreaming.com/"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            CodeBucks
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
