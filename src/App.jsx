import React, { useState, useCallback } from "react";
// Components
import { Header } from "./components/Header";
import { Table } from "./components/Table";
//Styles
import { GlobalStye } from "./GlobalStyles";

const App = ()=> {
  const [list, setList] = useState([]);

  const callbackList = useCallback((list) => {
    setList(list);
  }, []);

  return (
    <>
      <Header callbackList={callbackList} />
      {list.length === 0 ? (
        <h1>Start Searching</h1>
      ) : (
        <Table repositoryList={list} />
      )}
      <GlobalStye />
    </>
  );
};

export default App;
