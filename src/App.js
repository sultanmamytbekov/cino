import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Popular from "./components/pages/Popular";
import Rated from "./components/pages/Top_rated";
import Upcoming from "./components/pages/Upcoming";
import Now_playing from "./components/pages/Now_playing";
import Detailpage from "./components/pages/Detailpage";
import Person from "./components/pages/Person";
import Search from "./components/pages/Search";
import { useState } from "react";
import Home from "./components/pages/Home";
import Populardt from "./components/pages/Popular-dt";

function App() {
  const [color, setColor] = useState(false);

  return (
    <div
      style={{ background: color ? "black" : "", transition: "3s" }}
      className="App">
      <Header color={color} setColor={setColor} />
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top_rated" element={<Rated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/now_playing" element={<Now_playing />} />
        <Route path="/movie/movie-info/:movieId" element={<Detailpage />} />
        <Route path="/person/person-info/:person_id"element={<Person color={color} setColor={setColor} />}/>
        <Route path="/movieName/movieName-info/:movieName"element={<Search />}/>
        
      </Routes>
    </div>
  );
}

export default App;

//! npx create-react-app .
// npm i react-router-dom
