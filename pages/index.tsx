import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SearchAppBar from "../components/SearchAppBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SearchAppBar />
      <main className={styles.main}>Hello world</main>
    </div>
  );
};

export default Home;
