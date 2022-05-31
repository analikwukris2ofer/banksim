import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    width: 150px;
    margin-bottom: 20px;
  `;
  return (
    <div className="App">
      <h1>0</h1>
      <Layout>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
        <Button>Bankrupt</Button>
      </Layout>
    </div>
  );
}

export default App;
