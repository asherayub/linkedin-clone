import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
