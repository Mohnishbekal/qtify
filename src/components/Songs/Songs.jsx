import React, { useState, useEffect } from "react";
import styles from "./Songs.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/songs").then((response) => {
      setSongs(response.data);
    });
    axios.get("https://qtify-backend.labs.crio.do/genres").then((response) => {
      setGenres(response.data.data);
    });
  }, []);

  const filteredSongs =
    selectedTab === 0
      ? songs
      : songs.filter(
          (song) => song.genre.key === genres[selectedTab - 1].key
        );

  const cards = filteredSongs.map((song) => (
    <Card
      key={song.id}
      image={song.image}
      title={song.title}
      follows={song.likes}
      isLikes={true}
    />
  ));

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Songs</h2>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
        className={styles.tabs}
      >
        <Tab label="All" />
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} />
        ))}
      </Tabs>
      <Carousel items={cards} />
    </div>
  );
}

export default Songs;