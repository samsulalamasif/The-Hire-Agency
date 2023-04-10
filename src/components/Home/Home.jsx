import React, { useState } from "react";
import Header from "../Header/Header";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <CategoryList></CategoryList>
      <div></div>
    </div>
  );
};

export default Home;
