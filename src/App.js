import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  
  const [{user} ,dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>WELCOME</h1>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
