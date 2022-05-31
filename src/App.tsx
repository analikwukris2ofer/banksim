import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

//useSelector gives us access to our state.
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

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{amount}</h1>
      <Layout>
        <Button onClick={() => depositMoney(5000)}>Deposit</Button>
        <Button onClick={() => withdrawMoney(500)}>Withdraw</Button>
        <Button onClick={() => bankrupt()}>Bankrupt</Button>
      </Layout>
    </div>
  );
}

export default App;
