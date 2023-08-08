import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Props from "./components/Props";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Section from "./components/Section";
import Tail from "./components/Tail";

export interface MyProps {
  name: string;
  age: number;
  hobbies: string[];
}

function App() {
  const p: MyProps = {
    name: "kim",
    age: 20,
    hobbies: ["1", "2"],
  };

  return (
    <>
      <Header />
      <Tail />
      <Section color="blue" />
      <Counter />
      <Input />
      <Props {...p} />
      <Todo />
    </>
  );
}

export default App;
