import React from "react"
import './App.css';
import AddTrack from "./components/AddTrack";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListTracks from "./components/ListTracks"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      

      <main className = "container">
        <Routes>
          <Route path = "/add" element = { <AddTrack />} />
          <Route path = "/list" element = { <ListTracks />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
