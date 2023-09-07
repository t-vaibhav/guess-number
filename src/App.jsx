import React, { useState } from "react";
import Home from "./components/landing page";
import Navbar from "./components/navbar";
import Game from "./components/game";
import Result from "./components/result";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const level = useSelector((state) => state.level.level);
  const numericLevel = parseInt(level, 10); // Parse level as a number
  console.log(numericLevel);
  let digit = 0;
  if (numericLevel === 1) {
    digit = 10;
  } else if (numericLevel === 2) {
    digit = 50;
  } else {
    digit = 100;
  }
  const guess = useSelector((state) => state.guess.guess);
  const number = Math.floor(Math.random() * digit);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "game",
      element: <Game />,
    },
    {
      path: "/result",
      element: <Result number={number} guess={guess} />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
