import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
