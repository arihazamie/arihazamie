import React from "react";
import DarkMode from "../components/Ready/DarkMode";
import HomePage from "@/components/Ready/Home";
import "../app/globals.css";

const Home = () => {
  return (
    <main>
      <div className="flex">
        <div className="w-1/3"></div>
        <div className="grid text-center items-center justify-center border-2 rounded-lg">
          <HomePage />
        </div>
        <div className="w-1/3">
          <DarkMode></DarkMode>
        </div>
      </div>
    </main>
  );
};

export default Home;
