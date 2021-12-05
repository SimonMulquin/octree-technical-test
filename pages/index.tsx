import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SearchAppBar from "../components/SearchAppBar";
import TasksList from "../components/TasksList";
import CreateTaskForm from "../components/CreateTaskForm";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={styles.container}>
      <SearchAppBar setSearchValue={setSearchValue} />
      <main className={styles.main}>
        <TasksList searchValue={searchValue} />
        <CreateTaskForm />
      </main>
    </div>
  );
};

export default Home;
