"use client";

import React, { useState } from "react";
import fetchSongs from "utils/fetchSongs.ts";

const TestPage = () => {
  const [userId, setUserId] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchSongs = async () => {
    setLoading(true);
    setError("");
    try {
      const fetchedSongs = await fetchSongs(userId);
      setSongs(fetchedSongs);
    } catch (err) {
      setError("Failed to fetch songs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Test Fetch Songs</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        className="text-black"
      />
      <button onClick={handleFetchSongs} disabled={loading}>
        {loading ? "Loading..." : "Fetch Songs"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {songs.length > 0 ? (
          <ul>
            {songs.map((song, index) => (
              <li key={index}>
                {song.title} - {song.artist}
              </li> // Adjust according to your song structure
            ))}
          </ul>
        ) : (
          <p>No songs to display</p>
        )}
      </div>
    </div>
  );
};

export default TestPage;
