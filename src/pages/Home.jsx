import React from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeArticles from "../Components/HomeArticles";
import HomeSupportUs from "../Components/HomeSupportUs";

const Home = () => {
  return (
    <div>
      <div><HomeHeader /></div>
      <div><HomeSupportUs /></div>
      <div><HomeArticles /></div>
    </div>
  );
};

export default Home;
