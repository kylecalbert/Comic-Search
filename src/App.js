import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ComicList from "./components/ComicList.js";

function App() {
  const PUBLIC_KEY = "19a75b8c75d2b570d4ad8c9257b748d2";
  const [search, setSearch] = useState(" ");
  const [characterData, setCharacterData] = useState([]);
  const [comicData, setComicData] = useState([]);

  const CHARACTER_API_URL = `https://gateway.marvel.com:443/v1/public/characters?name=${search}&apikey=${PUBLIC_KEY}`;

  const handleChange = (e) => setSearch(e.target.value);
  // console.log(search);

  // useEffect(() => {
  //   getCharacters();
  //   console.log("EFFECT HAS BEEN RUN");
  // }, []);

  const getCharacters = async () => {
    const response = await fetch(CHARACTER_API_URL);
    const data = await response.json();
    const comic_id = parseInt(data.data.results[0].id);
    console.log(comic_id);
    getComics(comic_id);
    setCharacterData(data.data.results);
  };

  const getComics = async (comic_id) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${comic_id}/comics?apikey=${PUBLIC_KEY}`
    );
    const data = await response.json();
    setComicData(data.data.results);
    console.log(data.data.results);
  };
  const HandleOnSubmit = (e) => {
    e.preventDefault();
    getCharacters();
  };

  return (
    <div className="App">
      <div className="header-container">
        <div className="title">
          <h1>Marvel Search</h1>
        </div>
        <div className="search-container">
          <form onSubmit={HandleOnSubmit}>
            <input onChange={handleChange} value={search} type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="char-container">
        {characterData.map((characterData) => (
          <CharacterCard
            key={uuidv4()}
            name={characterData.name}
            description={characterData.description}
            image={characterData.thumbnail.path}
          /> // for each item in recipe get RECIPE COMPONENT and set data values
        ))}
      </div>
      <div className="comic-cards">
        {comicData.map((comicData) => (
          <ComicList key={uuidv4()} image={comicData.thumbnail.path} />
        ))}
      </div>
    </div>
  );
}

export default App;
