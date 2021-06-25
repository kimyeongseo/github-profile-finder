import React, { useState } from 'react';
import Result from "./components/Result";
import SearchBar from './components/SearchBar';
import { getUserData } from './lib/api';
import Styled from "styled-components";

const MainWrap = Styled.div`
h1{
  font-size: 40px;
  cursor: default;
  color: #FFFFFF;
  text-shadow: 0 0 10px #FFFFFF;
}

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background: rgb(183,209,247);
background: radial-gradient(circle, rgba(183,209,247,1) 8%, rgba(163,166,251,1) 100%);
`;

function App() {
  const [userData, setUserData] = React.useState({
    status: 'idle',
    data: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch (e) {
      setUserData({ status: "rejected", data: null });
      console.log(e);
    }
  };


  return (
    <MainWrap>
      <h1>GitHub Profile Finder</h1>
      < SearchBar getUser={getUser} />
      <Result
        userData={userData} />
    </MainWrap>
  );
}

export default App;
