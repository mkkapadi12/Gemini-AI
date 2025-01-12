import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex border w-full">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
