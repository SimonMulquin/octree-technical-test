import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SearchAppBar from "../components/SearchAppBar";
import TasksList from "../components/TasksList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SearchAppBar />
      <main className={styles.main}>
        <TasksList />
      </main>
    </div>
  );
};

export default Home;
