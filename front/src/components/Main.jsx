import React, { useEffect, useState } from "react";
import MainStyled from "../styled/Main.jsx";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Content from "./Content.jsx";

const Main = () => {
  return (
    <MainStyled>
      <Header />
      <Search />
      <Content />
    </MainStyled>
  );
};

export default Main;
