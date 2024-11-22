import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const NotFound: NextPage = () => {
  return (
    <div className={styles.screen}>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>
      <div className={styles.wrapperScreen}>
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src="/visuals/errorIllu.webp"
            height={300}
            width={300}
            alt="error illustration"
          />
          <div className="text-center">
            <h1 className="title">404 - Page Not Found</h1>
            <p className="mt-2">The page you are looking for does not exist.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => (window.location.href = "/")}
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
