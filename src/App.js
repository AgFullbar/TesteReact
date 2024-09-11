import React, { useState } from "react";
import usersData from "./data/users.json";
// import "./App.css";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );

}

export default App;
